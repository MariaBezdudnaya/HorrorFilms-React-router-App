// Вкладки с дополнительной инфой о курсе 
import { NavLink } from "react-router-dom";

export const Tabs = ({ tabs }) => {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 mb-4">
      {tabs.map(({ path, title }) => ( // Принимает на вход массив объектов, состоящий из пути и title
        <li className="mr-2" key={path}> {/* И рендерит список с линками */} 
          <NavLink 
            to={path}
            end
            aria-current="page"
            className={({ isActive }) => `tab-link ${isActive ? "tab-link-active" : ""}`}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
