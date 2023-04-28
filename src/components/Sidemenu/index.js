import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  import { Menu } from "antd";
  import { useEffect, useState } from "react";
  import { useLocation, useNavigate } from "react-router-dom";
  
  function SideMenu() {
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState("/");
  
    useEffect(() => {
      const pathName = location.pathname;
      setSelectedKeys(pathName);
    }, [location.pathname]);
  
    const navigate = useNavigate();
    return (
      <div className="SideMenu">
        <Menu
          className="SideMenuVertical"
          mode="vertical"
          onClick={(item) => {
            //item.key
            navigate(item.key);
          }}
          selectedKeys={[selectedKeys]}
          items={[
             {
               label: "Dashbaord",
               icon: <AppstoreOutlined />,
               key: "/",
             },
            {
              label: "Categeory A fault",
              key: "/inventory",
              icon: <AppstoreOutlined/>,
            },
            {
              label: "Categeory B fault",
              key: "/orders",
              icon: <AppstoreOutlined />,
            },
            {
              label: "Categeory C fault",
              key: "/orders",
              icon: <AppstoreOutlined />,
            },
            {
              label: "Number of Loads",
              key: "/orders",
              icon: <AppstoreOutlined />,
            },
            {
              label: "ActivitySheet",
              key: "/orders",
              icon: <AppstoreOutlined />,
            },
            {
              label: "Loading Locations",
              key: "/orders",
              icon: <AppstoreOutlined />,
            },
            {
              label: "Development Drilling",
              key: "/orders",
              icon: <AppstoreOutlined />,
            },
            {
              label: "Consumbles",
              key: "/orders",
              icon: <AppstoreOutlined />,
            },
            {
              label: "Metsplod",
              key: "/customers",
              icon: <UserOutlined />,
            },
          ]}
        ></Menu>
      </div>
    );
  }
  export default SideMenu;
  