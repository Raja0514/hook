import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
//import { getCustomers, getInventory } from "../../API";

import { DataStore } from "aws-amplify";

import { Couplings } from "../../models";

function Consumablecouplings() {
  const [dataSource, setDataSource] = useState([]);
  console.log(dataSource);

  async function fetchContacts() {
    const data = await DataStore.query(Couplings);
    setDataSource(data);
  }

  useEffect(() => {
    fetchContacts();
    const subscription = DataStore.observe(Couplings).subscribe(() =>
      fetchContacts()
    );
    return () => subscription.unsubscribe();
  }, []);

  return (
    <Space size={5} direction="vertical">
      <Typography.Title level={2}>Consumable Couplings</Typography.Title>
      <Table
        className="table"
        columns={[
          {
            title: "Couplings Size",
            dataIndex: "couplingssize",
          },
          {
            title: "Couplings Used",
            dataIndex: "couplingsused",
          },
          {
            title: "Couplings Damage",
            dataIndex: "couplingsdamage",
          },
          {
            title: "Couplings Lost",
            dataIndex: "couplingslost",
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
export default Consumablecouplings;
