import React from 'react';
import './Home.scss';
import Knowledge from "./Knowledge/Knowledge";


const Home = () => {
  const navigation = [
    {
      name: '前端',
      color: '#4a148c',
      src: 'navigation/frontend.png',
    },
    {
      name: '后端',
      color: '#4db6ac',
    },
    {
      name: '数据库',
      color: '#ff5722',
    },
    {
      type: 'add'
    }
  ];

  return (
    <div>
      <div className="title">开始学习吧！</div>
      <div>
        <Knowledge navigation={navigation} />
      </div>
    </div>
  );
};

export default Home;
