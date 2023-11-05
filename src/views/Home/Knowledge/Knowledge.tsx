import React, { useState } from 'react';
import { getImgUrl } from "../../../utils";
import './Knowledge.scss';
import { Button, Input, Modal } from "antd";
import react from "@vitejs/plugin-react";

const Knowledge = (props:any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editMsg,setEditMsg] = useState({})

  function handleDoubleClick(msg:any){
    if(msg.type === 'add') return
    setEditMsg(msg)
    setIsModalOpen(true);
  }
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <ul className="Knowledge">
      {props.navigation.map((item:any, index:any) => (
        // eslint-disable-next-line react/no-array-index-key
        <li onDoubleClick={()=>handleDoubleClick(item)} style={{ background: item.type === 'add'? 'green':item.color }} key={index}>
          <div>
            <div className="name">{item.type === 'add'?'添加新的知识':item.name}</div>
            {
              item.type === 'add'?
                <Button style={{marginTop: '20px'}} type="primary">添加</Button>
                :
                <div>
                  {
                    item.src?
                      <img src={getImgUrl(item.src)} alt="前端" />
                      :
                      <img src={getImgUrl('navigation/empty.png')} alt="暂无" />
                  }
                </div>
            }

          </div>
        </li>
      ))}
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title={'修改知识库'}
      >
        <div>
          知识名称：<Input placeholder="知识名称" />
          知识背景：<Input placeholder="知识名称" />
          知识图片：<Input placeholder="知识图片" />
        </div>
      </Modal>
    </ul>
  );
};

export default Knowledge;
