import { createElement, lazy } from "react";
import DarkMode from './DarkMode';

const DialogComponent = lazy(() => import('./Dialog'));
const CategoriesComponent = lazy(() => import('./Categories'));

const createCategories = () => {
  createElement(DialogComponent, {}, [CategoriesComponent]);

}

const FloatTool = () => {
  
  const showCategory = () => {
    createCategories
  };
  return (
    <aside className="fixed right-10 bottom-20">
      <div
        className="hover:text-primary cursor-pointer"
        onClick={() => showCategory()}
      >添加分类</div>
      <div
        className="hover:text-primary cursor-pointer"
      >添加内容</div>
      <DarkMode />
    </aside>
  )
}

export default FloatTool;