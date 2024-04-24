// Карточка фильма в списке
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

export const FilmCard = ({ imageUrl, title, year, id, description }) => {
  return (
    <div className="card-container">
      <div className="md:flex">
        <div className="md:shrink-0">{/* Картинка */}
          <img 
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={imageUrl}
            alt="film"
          />
        </div>
        <div className="p-8">

        <div className="content-type"> {/* title */}
            Film
        </div>
        <Link to={`${ROUTES.films}/${id}`} className="film-link">
          {title}
        </Link>
        
        <Link to={`${ROUTES.films}/${id}`} className="mt-2 text-slate-500">
          {year}
        </Link>

          <p className="mt-2 text-slate-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
