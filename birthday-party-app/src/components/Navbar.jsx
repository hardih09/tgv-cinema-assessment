import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeFilled, CalendarFilled, AuditOutlined } from '@ant-design/icons';
import TgvLogo from '/tgv-logo.png';

function Navbar () {
  const NavListTemp = [
    {
      id: '1',
      title: 'Home',
      desc: 'Description for this item',
      url: '/',
      icon: <HomeFilled />
    },
    {
      id: '2',
      title: 'Booking',
      desc: 'Description for this item',
      url: '/booking',
      icon: <CalendarFilled />
    },
    {
      id: '3',
      title: 'Enquiries',
      desc: 'Description for this item',
      url: '/enquiries',
      icon: <AuditOutlined />
    }
  ]
  const location = useLocation();
  return <div>
    <div>
      <div className="img-logo">
        <img src={TgvLogo} />
      </div>
      <div className="menu-list">
        {NavListTemp.map((data, index) => {
          return (<Link key={index} to={data.url}>
          <div className={`ml-item ${(data.url === location.pathname) ? "active" : ""}`}>
            <div className="mli-icon">
              {data.icon}
            </div>
            <div className="mli-label">
              <p>{data.title}</p>
              <p>{data.desc}</p>
            </div>
          </div>
        </Link>)
        })}
      </div>
    </div>
  </div>
}

export default Navbar;