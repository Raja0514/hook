import { Space, Typography } from "antd";
import "./App.css";
//import AppFooter from "./components/AppFooter";
import AppHeader from "./components/Appheader";
import PageContent from "./components/Pagecontent";
import SideMenu from "./components/Sidemenu";
import { withAuthenticator} from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";

function App1({ signOut, user }) {
  return (
    <div className="App">
      {/* <div >
         <Heading level={1}>Hello {user.username}</Heading>
         
      </div>
      <div>
      <Button onClick={signOut}>
          Sign out
        </Button>
      </div> */}
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

const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  todo: { marginBottom: 15 },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: { fontSize: 20, fontWeight: "bold" },
  todoDescription: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 5,
    padding: "5px 0px",
  },
};
