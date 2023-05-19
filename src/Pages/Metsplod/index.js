import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
//import { getCustomers, getInventory } from "../../API";

import { DataStore } from "aws-amplify";

import { Metstruckplod } from "../../models";

function Metsplods() {
  const [dataSource, setDataSource] = useState([]);
  console.log(dataSource);

  async function fetchContacts() {
    const data = await DataStore.query(Metstruckplod);
    setDataSource(data);
  }

  useEffect(() => {
    fetchContacts();
    const subscription = DataStore.observe(Metstruckplod).subscribe(() =>
      fetchContacts()
    );
    return () => subscription.unsubscribe();
  }, []);

  return (
    <Space size={5} direction="vertical">
      <Typography.Title level={2}>Metsplod</Typography.Title>
      <Table className="table"
        columns={[
          {
            title: "Truck Number",
            dataIndex: "trucknumber",
          },
          {
            title: "EngineHours",
            dataIndex: "enginehours",
          },
          {
            title: "Date",
            dataIndex: "date",
            
          },
          {
            title: "Operatorname",
            dataIndex: "operatorname",
          },

          {
            title: "Hours Worked",
            dataIndex: "hoursworked",
          },
          {
            title:"Shift",
            dataIndex:"shift"
          },
          {
            title:"crew",
            dataIndex:"crew"
          }
        ]}
        dataSource={dataSource}
        
        pagination={{
          pageSize: 6,
        }}
      ></Table>
    </Space>
  );
}
export default Metsplods;
