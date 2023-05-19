import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
//import { getCustomers, getInventory } from "../../API";

import { DataStore } from "aws-amplify";

import { Developmentdrilling } from "../../models";

function Development() {
  const [dataSource, setDataSource] = useState([]);
  console.log(dataSource);

  async function fetchContacts() {
    const data = await DataStore.query(Developmentdrilling);
    setDataSource(data);
  }

  useEffect(() => {
    fetchContacts();
    const subscription = DataStore.observe(Developmentdrilling).subscribe(() =>
      fetchContacts()
    );
    return () => subscription.unsubscribe();
  }, []);

  return (
    <Space size={5} direction="vertical">
      <Typography.Title level={2}>Development Drilling</Typography.Title>
      <Table className="table"
        columns={[
          {
            title: "Heading",
            dataIndex: "heading",
          },
          {
            title: "Holes",
            dataIndex: "holes",
          },
          {
            title: "Split set bolts",
            dataIndex: "splitsetbolts",
            
          },
          {
            title: "Tunnel profile Distance",
            dataIndex: "tunnelprofiledistance",
          },

          {
            title: "Tunnel profile Width",
            dataIndex: "tunnelprofilewidth",
          },
          {
            title:"Tunnel profile Height",
            dataIndex:"tunnelprofileheight"
          },
          {
            title:"Scalling Hours",
            dataIndex:"scalinghours"
          },{
            title:"Meshsheet",
            dataIndex:"meshsheet"
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
export default Development;
