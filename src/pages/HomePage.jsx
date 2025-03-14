// Главная страница
import { LinkButton } from "../components/LinkButton";
import { ROUTES } from "../constants";

export const HomePage = () => {
  return (
    <div className="homePage-text">
      <h1>
        WELCOME TO HORROR MOVIE APP!
      </h1>
      <p className="homePage-descr">See new horrors! </p>

      <LinkButton to={ROUTES.films} title="View Films" />
    </div>
  );
};
