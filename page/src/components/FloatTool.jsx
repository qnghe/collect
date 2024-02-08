import { lazy, useState } from "react";
import DarkMode from './DarkMode';
import { createPortal } from "react-dom";

const DialogComponent = lazy(() => import('./Dialog'));
const CategoriesComponent = lazy(() => import('./Categories'));

const FloatTool = () => {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <aside className="fixed right-10 bottom-20 select-none">
      <div
        className="hover:text-primary cursor-pointer"
        onClick={() => setShowCategory(true)}
      >
        添加分类
      </div>
      {showCategory && (
        createPortal(
          <DialogComponent onClose={() => setShowCategory(false)}>
            <CategoriesComponent />
          </DialogComponent>,
          document.getElementById('root')
        )
      )}
      <div
        className="hover:text-primary cursor-pointer"
      >添加内容</div>
      <DarkMode />
    </aside>
  )
}

export default FloatTool;