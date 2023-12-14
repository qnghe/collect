
import { CarOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";

function AppMenu() {
  const [menus, setMenus] = useState([]);
  const [activeMenu, setActiveMenu] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setMenus([
        {id: '', key: '1', label: '电影', tags: [], icon: <CarOutlined />},
        {id: '', key: '2', label: '电视剧', tags: [], icon: <CarOutlined />},
        {id: '', key: '3', label: '音乐', tags: [], icon: <CarOutlined />},
      ]);
    }, 100);
  }, []);

  const selectMenu = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <>
      {
        menus && menus.length > 0 ?
        (
          <ul
            className="flex-auto overflow-y-auto list-none p-0 m-0"
            mode="inline"
          >
            {
              menus.map((menu) => {
                return (
                  <li
                    className="h-10 leading-10 rounded cursor-pointer hover:text-primary hover:bg-cyan-50/50 dark:hover:text-gray-100"
                    key={menu.key}
                    onClick={() => selectMenu(menu)}
                  >
                    <div className={activeMenu.key === menu.key ? 'relative px-4 text-primary bg-cyan-50/50 before:content-[""] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-cyan-600' : 'px-4 '}>
                      { menu.label }
                    </div>
                  </li>
                );
              })
            }
          </ul>
        ) :
        (<div>暂无菜单</div>)
      }
    </>
  );
}

export default AppMenu;