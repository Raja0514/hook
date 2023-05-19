import {
    AppstoreOutlined,
    
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
               label: "Prestart",
               icon: <AppstoreOutlined />,
               key: "/prestart",
             },
             {
              label: "Metsplod",
              key: "/metsplod",
              icon: <UserOutlined />,
            },
            // {
            //   label: "Categeory A fault",
            //   key: "/inventory",
            //   icon: <AppstoreOutlined/>,
            // },
            // {
            //   label: "Categeory B fault",
            //   key: "/orders",
            //   icon: <AppstoreOutlined />,
            // },
            // {
            //   label: "Categeory C fault",
            //   key: "/orders",
            //   icon: <AppstoreOutlined />,
            // },
            {
              label: "Number of Loads",
              key: "/loads",
              icon: <AppstoreOutlined />,
            },
            // {
            //   label: "ActivitySheet",
            //   key: "/orders",
            //   icon: <AppstoreOutlined />,
            // },
            {
              label: "Loading Locations",
              key: "/location",
              icon: <AppstoreOutlined />,
            },
            {
              label: "Development Drilling",
              key: "/development",
              icon: <AppstoreOutlined />,
            },
            {
              label: "Consumble Bits",
              key: "/consumablebits",
              icon: <AppstoreOutlined />,
            },
            {
              label: "Consumble Steels",
              key: "/consumablesteels",
              icon: <AppstoreOutlined />,
            },
            {
              label: "Consumble Shanks",
              key: "/consumableshanks",
              icon: <AppstoreOutlined />,
            },
            {
              label: "Consumble Couplings",
              key: "/consumablecouplings",
              icon: <AppstoreOutlined />,
            },
            {
              label: "Consumble Reamers",
              key: "/consumablereamers",
              icon: <AppstoreOutlined />,
            },

            
          ]}
        ></Menu>
      </div>
    );
  }
  export default SideMenu;
  