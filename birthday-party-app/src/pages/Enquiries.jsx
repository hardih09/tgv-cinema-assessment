import React from 'react';
import { Button, Input, Row, Col, DatePicker, Space, TimePicker, Radio, Checkbox } from 'antd';
import '../styles/Enquiries.css';
const { TextArea } = Input;

function Enquiries () {
  return (<div className="booking-container">
    <div className="content-title-body">
      <p className="content-title">Do you have any Enquiries for us?</p>
      <p className="content-subtitle">Feel free to tell us by fill in the following info.</p>
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
            <p className="field-title">Phone No.</p>
            <div className="field-input">
              <Input type="text" placeholder="E.g: 26" />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className="form-field">
            <p className="field-title">Type of Enquiry</p>
            <div className="field-input">
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value={1}>Event Location</Radio>
                  <Radio value={2}>Package Provided</Radio>
                  <Radio value={3}>Service Details</Radio>
                  <Radio value={4}>Pricing</Radio>
                  <Radio value={5}>Other</Radio>
                </Space>
              </Radio.Group>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <div className="form-field">
            <p className="field-title">{`Specific Package/Service (if applicable)`}</p>
            <div className="field-input">
              <Input type="text" placeholder="Enter the details here" />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className="form-field">
            <p className="field-title">Enquiry Details</p>
            <div className="field-input">
              <TextArea rows={4} maxLength={560} showCount />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className="form-field">
            <p className="field-title">How did you hear about us?</p>
            <div className="field-input">
              <Radio.Group>
                <Space direction="vertical">
                  <Checkbox>Referral</Checkbox>
                  <Checkbox>Online Search</Checkbox>
                  <Checkbox>Social Media</Checkbox>
                  <Checkbox>Advertisement</Checkbox>
                  <Checkbox>Others</Checkbox>
                </Space>
              </Radio.Group>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className="form-field">
            <p className="field-title">Any Additional Comments/Questions</p>
            <div className="field-input">
              <TextArea rows={4} maxLength={560} showCount />
            </div>
          </div>
        </Col>
      </Row>
      <div className="concent-body">
        <Checkbox>I concent to being contacted regarding this enquiry and related services.</Checkbox>
      </div>
    </div>
    <div className="action-panel">
      <Button type="primary">Submit Enquiry</Button>
    </div>
  </div>)
}

export default Enquiries;