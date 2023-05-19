import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
//import { getCustomers, getInventory } from "../../API";

import { DataStore } from "aws-amplify";

import { Bits } from "../../models";

function Consumablebits() {
  const [dataSource, setDataSource] = useState([]);
  console.log(dataSource);

  async function fetchContacts() {
    const data = await DataStore.query(Bits);
    setDataSource(data);
  }

  useEffect(() => {
    fetchContacts();
    const subscription = DataStore.observe(Bits).subscribe(() =>
      fetchContacts()
    );
    return () => subscription.unsubscribe();
  }, []);

  return (
    <Space size={5} direction="vertical">
      <Typography.Title level={2}>Consumable Bits</Typography.Title>
      <Table
        className="table"
        columns={[
          {
            title: "Bits Size",
            dataIndex: "bitssize",
          },
          {
            title: "Bits Used",
            dataIndex: "bitsused",
          },
          {
            title: "Bits Damage",
            dataIndex: "bitsdamage",
          },
          {
            title: "Bits Lost",
            dataIndex: "bitslost",
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
export default Consumablebits;
