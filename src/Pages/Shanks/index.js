import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
//import { getCustomers, getInventory } from "../../API";

import { DataStore } from "aws-amplify";

import { Shanks } from "../../models";

function Consumableshanks() {
  const [dataSource, setDataSource] = useState([]);
  console.log(dataSource);

  async function fetchContacts() {
    const data = await DataStore.query(Shanks);
    setDataSource(data);
  }

  useEffect(() => {
    fetchContacts();
    const subscription = DataStore.observe(Shanks).subscribe(() =>
      fetchContacts()
    );
    return () => subscription.unsubscribe();
  }, []);

  return (
    <Space size={5} direction="vertical">
      <Typography.Title level={2}>Consumable Shanks</Typography.Title>
      <Table
        className="table"
        columns={[
          {
            title: "Shanks Size",
            dataIndex: "shankssize",
          },
          {
            title: "Shanks Used",
            dataIndex: "shanksused",
          },
          {
            title: "Shanks Damage",
            dataIndex: "shanksdamage",
          },
          {
            title: "Shanks Lost",
            dataIndex: "shankslost",
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
export default Consumableshanks;
