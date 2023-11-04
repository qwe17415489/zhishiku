import React from 'react';
// import { Link } from 'react-router-dom';
// import Router from './routes';
import './styles/vendors.scss';
import './App.scss';

const App = () => {
  const navigation = [
    {
      name: '前端',
      color: '#4a148c',
      src: './assets/navigation/frontend.png',
    },
    // {
    //   name: '后端',
    //   color: '#4db6ac',
    // },
  ];
  const getImgUrl = (file: any) => new URL(file, import.meta.url).href;

  return (
    <main>
      <div className="title">开始学习吧！</div>
      <ul className="navigation">
        {navigation.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li style={{ background: item.color }} key={index}>
            <div>
              <div className="name">{item.name}</div>
              <img src={getImgUrl(item.src)} alt="前端" />
            </div>
          </li>
        ))}
      </ul>
      {/* <Router /> */}
    </main>
  );
};

export default App;
