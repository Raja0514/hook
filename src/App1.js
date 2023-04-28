import { Space } from "antd";
import "./App.css";
//import AppFooter from "./components/AppFooter";
import AppHeader from "./components/Appheader";
import PageContent from "./components/Pagecontent";
import SideMenu from "./components/Sidemenu";
import {withAuthenticator} from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";

function App1() {
  return (
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      {/* <AppFooter /> */}
    </div>
  );
}
export default withAuthenticator(App1);
