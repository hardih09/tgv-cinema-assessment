import React, { useEffect, useState } from 'react';
import { Button, Input, Row, Col, DatePicker, Space, TimePicker, Radio, Checkbox } from 'antd';
import '../styles/Home.css';
import { CheckOutlined, CheckCircleOutlined } from '@ant-design/icons';
const { TextArea } = Input;

function Home () {
  const [offeredList, setOfferedList] = useState([]);
  useEffect (() => {
    fetch('http://localhost:3000/api/packages')
      .then(res => res.json())
      .then(data => {
        if (data && data.packages) {
          setOfferedList(data.packages);
        }
      })
  }, []);
  return (<div className="booking-container">
    <div className="content-title-body">
      <p className="content-title">Explore Our Available Packages</p>
      <p className="content-subtitle">The package provides services based on activities included with different price.</p>
    </div>
    <Row gutter={[20, 20]}>
      {offeredList.map((data, index) => {
        return (<Col key={index} xs={24} sm={24} md={12} lg={8}>
          <div className="pkg-card">
            <div className="pkg-img" style={{ backgroundImage: `url(${data.imgURL})` }} />
            <p className="pkg-title">{data.name}</p>
            <p className="pkg-price">{`RM ${data.price}`}</p>
            <div className="action-body">
              <Button type="primary" size="large">Book Now</Button>
            </div>
            <p className="pkg-desc">{data.description}</p>
            <div className="pkg-list">
              <div className="pkg-list-item">
                {((data.offeredList) ? data.offeredList : []).map((data1, index) => {
                  return (<div key={index}>
                    <Space direction="horizontal">
                      <CheckCircleOutlined />
                      <p className="pkg-item-label">{data1.label}</p>
                    </Space>
                  </div>)
                })}
              </div>
            </div>
          </div>
        </Col>)
      })}
    </Row>
  </div>)
}

export default Home;