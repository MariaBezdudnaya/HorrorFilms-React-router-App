import { Outlet } from "react-router-dom";
import { MainNavigation } from "./MainNavigation";

export const BaseLayout = () => {
  return (
    <div className="flex flex-col items-center">
      <MainNavigation />
      <div className="flex flex-col px-6 relative h-full w-2/3">
        {/* Означает, что контент всех вложенных роутов (дочерних компонентов) будет рендериться вместо данного компонента */}
        <Outlet /> 
      </div>
    </div>
  );
};
