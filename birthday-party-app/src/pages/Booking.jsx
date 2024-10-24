import React, { useEffect } from 'react';
import { Button, Input, Row, Col, DatePicker, Space, TimePicker } from 'antd';
import '../styles/Booking.css';
const { TextArea } = Input;

function Booking () {
  useEffect (() => {
    fetch('http://localhost:3000/api/movies')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }, []);
  return (<div className="booking-container">
    <div className="banner-panel" />
    <div className="content-title-body">
      <p className="content-title">Booking for Birthday Party</p>
      <p className="content-subtitle">Please fill in the following info.</p>
    </div>
    <div className="content-form">
      <Row gutter={[22, 14]}>
        <Col xs={24} sm={24} md={24} lg={12}>
          <div className="form-field">
            <p className="field-title">First Name</p>
            <div className="field-input">
              <Input type="text" placeholder="Enter your name here" />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <div className="form-field">
            <p className="field-title">Last Name</p>
            <div className="field-input">
              <Input type="text" placeholder="Enter your name here" />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <div className="form-field">
            <p className="field-title">Email</p>
            <div className="field-input">
              <Input type="text" placeholder="E.g: user@noemail.com" />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <div className="form-field">
            <p className="field-title">Age</p>
            <div className="field-input">
              <Input type="text" placeholder="E.g: 26" />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <div className="form-field">
            <p className="field-title">Birth Date</p>
            <div className="field-input">
              <DatePicker placeholder="Select date" format={`DD/MM/YYYY`} />
            </div>
          </div>
        </Col>
      </Row>
      <p className="section-title">Details About the Party</p>
      <Row gutter={[22, 14]}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Space direction="horizontal" size={10}>
            <div className="form-field">
              <p className="field-title">Date & Time for the Party</p>
              <div className="field-input">
                <DatePicker placeholder="Select date" format={`DD/MM/YYYY`} />
              </div>
              <p className="field-subtitle">Date</p>
            </div>
            <div className="form-field">
              <p className="field-title" style={{ opacity:0 }}>Time for the Party</p>
              <div className="field-input">
                <TimePicker use12Hours format={`h:mm:ss A`} placeholder="Select Time" />
              </div>
              <p className="field-subtitle">Time</p>
            </div>
          </Space>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className="form-field">
            <p className="field-title">Venue Details</p>
            <div className="field-input">
              <TextArea rows={6} maxLength={360} showCount />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className="form-field">
            <p className="field-title">RVSP</p>
            <div className="field-input">
              <TextArea rows={6} maxLength={360} showCount />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className="form-field">
            <p className="field-title">Special Request</p>
            <div className="field-input">
              <TextArea rows={6} maxLength={360} showCount />
            </div>
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