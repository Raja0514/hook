import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../../API";
import { Button,Heading,useAuthenticator } from "@aws-amplify/ui-react";
import { Auth} from "aws-amplify";



function AppHeader() {
  
  const userSelector = context => [context.user];
  const {user,signOut}=useAuthenticator(userSelector)

  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);

 
  // async function signOut() {
  //   try {
  //     await Auth.signOut();
  //   } catch (error) {
  //     console.log('error signing out: ', error);
  //   }
  // }
  
  return (
    <div className="AppHeader">
      <Image
        width={100}
        src="https://dynamic.brandcrowd.com/asset/logo/4391fe9e-ec95-4272-8f82-e6223d166371/logo-search-grid-1x?logoTemplateVersion=1&v=638107360386070000"
      ></Image>

      <Typography.Title>Live Mining Data</Typography.Title>
        
       

        <Heading level={1}>Hello {user.username}</Heading>
    <Button onClick={signOut}>Sign out</Button>
    </div>
  );
}
export default AppHeader;

