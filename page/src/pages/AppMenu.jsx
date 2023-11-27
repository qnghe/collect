
import { CarOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";

function AppMenu() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setMenus([
        {key: '1', label: 'nav1', icon: <CarOutlined />},
        {key: '2', label: 'nav2', icon: <CarOutlined />},
        {key: '3', label: 'nav3', icon: <CarOutlined />}
      ]);
    }, 100);
  }, []);
  return (
    <>
      {
        menus && menus.length > 0 ?
        (
          <ul
            className="flex-auto overflow-y-auto list-none p-10 m-0"
            theme="dark"
            mode="inline"
            items={menus}
          >
            {
              menus.map((menu) => {
                return (
                  <li className="h-10 leading-10 px-8" key={menu.key}>{ menu.label }</li>
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