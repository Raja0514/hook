import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
//import { getCustomers, getInventory } from "../../API";

import { DataStore } from "aws-amplify";

import { Steels } from "../../models";

function Consumablesteels() {
  const [dataSource, setDataSource] = useState([]);
  console.log(dataSource);

  async function fetchContacts() {
    const data = await DataStore.query(Steels);
    setDataSource(data);
  }

  useEffect(() => {
    fetchContacts();
    const subscription = DataStore.observe(Steels).subscribe(() =>
      fetchContacts()
    );
    return () => subscription.unsubscribe();
  }, []);

  return (
    <Space size={5} direction="vertical">
      <Typography.Title level={2}>Consumable Steels</Typography.Title>
      <Table
        className="table"
        columns={[
          {
            title: "Steel Size",
            dataIndex: "steelssize",
          },
          {
            title: "Steel Used",
            dataIndex: "steelsused",
          },
          {
            title: "Steel Damage",
            dataIndex: "steelsdamage",
          },
          {
            title: "Steel Lost",
            dataIndex: "steelslost",
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
export default Consumablesteels;
