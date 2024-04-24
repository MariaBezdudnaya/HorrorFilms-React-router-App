// Главная страница
import { LinkButton } from "../components/LinkButton";
import { ROUTES } from "../constants";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="text-xl font-medium text-black mb-5">
        Welcome to Horror Movie App!
      </h1>
      <p className="text-slate-500 mb-10">Show new horrors! </p>

      <LinkButton to={ROUTES.films} title="View Films" />
    </div>
  );
};
