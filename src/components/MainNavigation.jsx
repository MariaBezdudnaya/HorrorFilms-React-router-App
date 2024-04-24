import { NavLink } from "react-router-dom"; // Компонент NavLink работает точно так же, как компонент Link , но он предназначен специально для отображения активных состояний ссылок, например, в панелях навигации
import { NAV_ITEMS } from "../constants";

export const MainNavigation = () => {
  return (
    <header className="flex justify-start bg-slate-600 p-6 pl-11 text-slate-50 w-full">
      <nav className="flex">
        {NAV_ITEMS.map((navItem) => ( // Вкладки меню
          <div className="px-6" key={navItem.path}>
            <NavLink className={({isActive}) =>  isActive && "text-red-600 font-bold"} to={navItem.path}>{navItem.title}</NavLink>
          </div>
        ))}
      </nav>
    </header>
  );
};
