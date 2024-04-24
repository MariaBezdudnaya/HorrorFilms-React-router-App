// Компонент с курсом
import { Await, Outlet, defer, useLoaderData } from "react-router-dom";
import { mockFetch } from "../utils/api";
import { LinkButton } from "../components/LinkButton";
import { Tabs } from "../components/Tabs";
import { Suspense } from "react";
import { Loader } from "../components/Loader";

const TABS = [ // Вкладки
  {
    path: "", // Отображается по умолчанию
    title: "About director", 
  },
  {
    path: "critics", // Отображается при добавлении во вкладку сегмента critics
    title: "Film Critics",
  },
];

export const filmLoader = ({ params: { id } }) => { // В неё прокидывается объект с params, откуда мы можем достать id
  const film = mockFetch(`/films/${id}`); // Делаем запрос на фильм
  return defer({ // Возвращаем объект с фильмом. Defer - утилита, которая позволяет отложить данные, возвращаемые из лодера, прокидывая промис вместо готовых данных
    film,
  });
};

export const FilmDetails = () => {
  const { film } = useLoaderData(); // Вместо компонента передаём функцию. В film приходит промис, который передали пропсу resolve

  return (
    <Suspense fallback={<Loader />}> 
      {/* Компонент Await используется для рендеринга отложенных данных, прокидывает данные, когда они готовы. Должен быть обёрнут в компонент React.Suspense или React.SuspenseList для использования fallback (колесо загрузки) в случае неуспешной загрузки */}
      <Await resolve={film}> 
        {({ imageUrl, title, year, starring, description }) => ( 
          <div className="card-container mt-10">
            <div className="flex flex-col">
              <div className="w-full"> 
                <img 
                  className="h-[250] w-full object-cover"
                  src={imageUrl}
                  alt="film"
                /> {/* Картинка фильма */}
              </div>
              <div className="p-8">
                <div className="content-type">HORROR FILM</div> {/* Title */}
                <div className="film-title">{title} ({year})</div> {/* Название фильма и год выпуска */}
                <p className="mt-2 text-slate-500 mb-6">STARRING: {starring}</p> {/* Описание фильма */}
                <p className="mt-2 text-slate-500 mb-6">DESCRIPTION: {description}</p> {/* Описание фильма */}
                <Tabs tabs={TABS} /> {/* Вкладки с дополнительной инфой о фильме */}
                <Outlet /> {/* Дочерние компоненты Tabs */}
                <LinkButton to="start-show" title="Start showing" /> {/* Авторизация */}
              </div>
            </div>
          </div>
        )}
      </Await>
    </Suspense>
  );
};
