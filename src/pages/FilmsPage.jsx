// Страница с курсами
import { Suspense, useEffect, useState } from "react";
import { FilmCard } from "../components/FilmCard";
import { mockFetch } from "../utils/api";
import { Loader } from "../components/Loader";
import {
  Await,
  defer,
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";

export const filmsLoader = ({ request }) => {
  const search = new URL(request.url).searchParams.get("search"); // для того, чтобы в адресной строке устанавливались такие же search-параметры, как в поиске на странице
  const films = mockFetch("/films", { search });

  return defer({
    films,
  });
};

export const FilmsPage = () => {
  const { films } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFromQuery = searchParams.get("search");
  const { state } = useNavigation();
  const [search, setSearch] = useState(searchFromQuery || "");

  useEffect(() => { // для того, чтобы в адресной строке устанавливались такие же search-параметры, как в поиске на странице
    setSearchParams((params) => {
      if (search) {
        params.set("search", search);
      } else {
        params.delete("search");
      }
      return params;
    });
  }, [search]);

  return (
    <Suspense fallback={<Loader />}>
      <Await
        resolve={films}
        errorElement={<div>Oops, error while loading films</div>}
      >
        {(films) => (
          <div className="flex-col">
            <div className="flex justify-center px-5 py-10">
              <input
                type="text"
                className="search-input"
                placeholder="Search films"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="relative">
              {state === "loading" && <Loader />}
              {films && films.length > 0 ? (
                films.map((item) => (
                  <FilmCard key={item.id} {...item} />
                ))
              ) : (
                <div className="text-red-900 text-center">Horror is not found</div>
              )}
            </div>
          </div>
        )}
      </Await>
    </Suspense>
  );
};
