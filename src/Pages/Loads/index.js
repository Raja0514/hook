import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
//import { getCustomers, getInventory } from "../../API";

import { DataStore } from "aws-amplify";

import { Numberofloads} from "../../models";

function Loads() {
  const [dataSource, setDataSource] = useState([]);
  console.log(dataSource);

  async function fetchContacts() {
    const data = await DataStore.query(Numberofloads);
    setDataSource(data);
  }

  useEffect(() => {
    fetchContacts();
    const subscription = DataStore.observe(Numberofloads).subscribe(() =>
      fetchContacts()
    );
    return () => subscription.unsubscribe();
  }, []);

  return (
    <Space size={5} direction="vertical">
      <Typography.Title level={2}>Number of Loads</Typography.Title>
      <Table className="table"
        columns={[
          {
            title: "Number of Loads",
            dataIndex: "loads",
          },
          
        ]}
        dataSource={dataSource}
        
        pagination={{
          pageSize: 6,
        }}
      ></Table>
    </Space>
  );
}
export default Loads;
