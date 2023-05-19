import {Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
//import { getCustomers, getInventory } from "../../API";

import { DataStore } from "aws-amplify";

import { Reamers } from "../../models";

function Consumablereamers() {
  const [dataSource, setDataSource] = useState([]);
  console.log(dataSource);

  async function fetchContacts() {
    const data = await DataStore.query(Reamers);
    setDataSource(data);
  }

  useEffect(() => {
    fetchContacts();
    const subscription = DataStore.observe(Reamers).subscribe(() =>
      fetchContacts()
    );
    return () => subscription.unsubscribe();
  }, []);

  return (
    <Space size={5} direction="vertical">
      <Typography.Title level={2}>Consumable Reamers</Typography.Title>
      <Table
        className="table"
        columns={[
          {
            title: "Reamers Size",
            dataIndex: "reamerssize",
          },
          {
            title: "Reamers Used",
            dataIndex: "reamersused",
          },
          {
            title: "Reamers Damage",
            dataIndex: "reamersdamage",
          },
          {
            title: "Reamers Lost",
            dataIndex: "reamerslost",
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
export default Consumablereamers;
