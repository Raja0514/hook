import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
//import { getCustomers, getInventory } from "../../API";

import { DataStore } from "aws-amplify";

import { Prestart } from "../../models";

function Prestart1() {
  const [dataSource, setDataSource] = useState([]);
  console.log(dataSource);

  async function fetchContacts() {
    const data = await DataStore.query(Prestart);
    setDataSource(data);
  }

  useEffect(() => {
    fetchContacts();
    const subscription = DataStore.observe(Prestart).subscribe(() =>
      fetchContacts()
    );
    return () => subscription.unsubscribe();
  }, []);

  return (
    <Space size={5} direction="vertical">
      <Typography.Title level={2}> Prestart Sheet </Typography.Title>
      <Table
        className="table"
        columns={[
          {
            title: "Odometer Reading",
            dataIndex: "",
          },
          {
            title: "Enginehour Sos",
            dataIndex: "",
          },
          {
            title: "Categeory A fault",
            dataIndex: "",
          },
          {
            title: "Categeory B fault",
            dataIndex: "",
          },

          {
            title: "Categeory C fault",
            dataIndex: "",
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
export default Prestart1;
