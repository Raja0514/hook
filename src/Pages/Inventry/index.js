import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
//import { getCustomers, getInventory } from "../../API";

import { DataStore } from "aws-amplify";

import { Loadinglocatins } from "../../models";

function Loadinglocation() {
  const [dataSource, setDataSource] = useState([]);
  console.log(dataSource);

  async function fetchContacts() {
    const data = await DataStore.query(Loadinglocatins);
    setDataSource(data);
  }

  useEffect(() => {
    fetchContacts();
    const subscription = DataStore.observe(Loadinglocatins).subscribe(() =>
      fetchContacts()
    );
    return () => subscription.unsubscribe();
  }, []);

  return (
    <Space size={5} direction="vertical">
      <Typography.Title level={2}>Loading Locations</Typography.Title>
      <Table
        className="table"
        columns={[
          {
            title: "From Loaction",
            dataIndex: "fromlocation",
          },
          {
            title: "Development",
            dataIndex: "development",
          },
          {
            title: "Loading Loaction ",
            dataIndex: "loadinglocation",
          },
          {
            title: "From Stockpile",
            dataIndex: "fromstockpile",
          },

          {
            title: "To ROM Finger",
            dataIndex: "toromfinger",
          },
          {
            title: "Bog",
            dataIndex: "bog",
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
export default Loadinglocation;
