import React from 'react';
import { Button, Input, Row, Col } from 'antd';
import '../styles/Booking.css';

function Booking () {
  return (<div className="booking-container">
    <div className="content-title-body">
      <p className="content-title">Booking for Birthday Party</p>
      <p className="content-subtitle">Please fill in the following info.</p>
    </div>
    <div className="content-form">
      <Row gutter={22}>
        <Col span={12}>
          <div className="form-field">
            <p className="field-title">First Name</p>
            <div className="field-input">
              <Input type="text" placeholder="Enter your name here" />
            </div>
            {/* <p className="field-subtitle">First Name</p> */}
          </div>
        </Col>
        <Col span={12}>
          <div className="form-field">
            <p className="field-title">Last Name</p>
            <div className="field-input">
              <Input type="text" placeholder="Enter your name here" />
            </div>
            {/* <p className="field-subtitle">Last Name</p> */}
          </div>
        </Col>
      </Row>
    </div>
    <div className="action-panel">
      <Button type="primary">Book Now</Button>
    </div>
  </div>)
}

export default Booking;