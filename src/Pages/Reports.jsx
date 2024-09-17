import React, { useState } from 'react'
import { Table, Button } from 'antd';
import { UploadOutlined, FilePdfOutlined, DeleteOutlined } from "@ant-design/icons";
import { Modal }
  from
  "antd"
  ;

import ModalComponent from "../Components/Modal"
const Reports = () => {
  const columns = [
    {
      title: 'SL.NO',
      dataIndex: 'key',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      // sorter: {
      //   compare: (a, b) => a.chinese - b.chinese,
      //   multiple: 3,
      // },
    },
    {
      title: 'Order ID',
      dataIndex: 'Order',
      // sorter: {
      //   compare: (a, b) => a.math - b.math,
      //   multiple: 2,
      // },
    },
    {
      title: 'Person Incharge',
      dataIndex: 'person',
      // sorter: {
      //   compare: (a, b) => a.english - b.english,
      //   multiple: 1,
      // },
    },
    {
      title: 'Test Parameters',
      dataIndex: 'test',
      // sorter: {
      //   compare: (a, b) => a.english - b.english,
      //   multiple: 1,
      // },
    },
    {
      title: 'File',
      dataIndex: 'file',
      // sorter: {
      //   compare: (a, b) => a.english - b.english,
      //   multiple: 1,
      // },
      render: () => <div className=""><FilePdfOutlined style={{ color: "red", fontSize: "1.2rem" }} /></div>
    },
    {
      title: 'Action',
      dataIndex: 'action',
      // sorter: {
      //   compare: (a, b) => a.english - b.english,
      //   multiple: 1,
      // },
      render: () => <div className=""><DeleteOutlined style={{ color: "red", fontSize: "1.1rem" }} /></div>

    },
  ];
  const data = [
    {
      key: '1',
      date: '2024/09/12',
      Order: 98,
      person: 60,
      test: 70,
      file: "",
      action: ""
    },

  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  const [open, setOpen] = useState(false)
  return (
    <div className=''>
      <ModalComponent open={open} cancel={() => setOpen(false)} title={"Upload Report"} />
      <div className="px-5 py-2 text-2xl font-bold">Reports</div>
      <div className="px-5 py-2 flex flex-col gap-5">
        <div className="flex justify-end">
          <div className='bg-[#B2ECEC] font-bold text-sm px-3 py-2 cursor-pointer rounded-md' onClick={() => setOpen(true)}> Upload File</div>
        </div>
        <Table columns={columns} dataSource={data} onChange={onChange} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: "10px" }} />
      </div>
    </div>
  )
}

export default Reports  