import React from 'react';
import { Button, Form, Input, Radio, Upload } from 'antd';
import './signup-form.less';

const SignupFormAdult: React.FC = () => {
  const onFinish = (values: any) => {
    // send data to redux
  };

  const { Dragger } = Upload;
  const { TextArea } = Input;

  return (
      <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
      >
        <Form.Item
            label="First Name"
            name="firstName"
            className="inline-block-half"
            rules={[{ required: true, message: 'Please input your first name' }]}
        >
          <Input placeholder="First Name"/>
        </Form.Item>

        <Form.Item
            label="Last Name"
            name="lastName"
            className="inline-block-half"
            rules={[{ required: true, message: 'Please input your last name' }]}
        >
          <Input placeholder="Last Name"/>
        </Form.Item>


        <Form.Item
            label="Pronouns"
            name="pronouns"
            rules={[{ required: true, message: 'Please select your pronouns' }]}
        >
          <Radio.Group>
            <Radio className="radio-item" value={1}>
              He/Him
            </Radio>
            <Radio className="radio-item" value={2}>
              She/Her
            </Radio>
            <Radio className="radio-item" value={4}>
              They/Them
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
            label="Email"
            name="email"
            rules={[{
              required: true,
              type: 'email',
              message: 'Please input a valid email address',}]}
        >
          <Input placeholder="Email"/>
        </Form.Item>

        <Form.Item
            label="Phone Number"
            name="phoneNumber"
            className="inline-block-half"
            rules={[{
              required: true,
              pattern: new RegExp(/^[^0-9]*(?:(\d)[^0-9]*){10}$/),
              message: 'Please input a valid ten-digit phone number'}]}
        >
          <Input
              placeholder="Phone Number"/>
        </Form.Item>

        <Form.Item
            label="Date of Birth"
            name="dateOfBirth"
            className="inline-block-half"
            rules={[{
              required: true,
              type:'date',
              message: 'Please input your date of birth' }]}
        >
          <Input placeholder="DD/MM/YYYY"/>
        </Form.Item>

        <Form.Item
            label="Allergies (if applicable)"
            name="allergies"
        >
          <TextArea rows={3} placeholder="Allergies"/>
        </Form.Item>

        <Form.Item
            label="Diagnosis"
            name="diagnosis"
        >
          <TextArea rows={1} placeholder="Diagnosis"/>
        </Form.Item>

        <Form.Item
            label="Other Notes"
            name="otherNotes"
        >
          <TextArea rows={3} placeholder="Other Notes"/>
        </Form.Item>

        <Form.Item
            name="password"
            label="Create Password"
            className="block-half stacked-inputs"
            hasFeedback
            rules={[{
              required: true,
              pattern: new RegExp(/^(?=.*\d).{8,20}$/),
              message: 'Password must be 8-20 characters, containing at least one digit'}]}
        >
          <Input.Password placeholder="Password"/>
        </Form.Item>
        <Form.Item
            name="confirm-password"
            dependencies={['password']}
            className="block-half"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Passwords must match!'
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('This password does not match!');
                },
              }),
            ]}
        >
          <Input.Password placeholder="Confirm Password"/>
        </Form.Item>

        <Form.Item label="Upload Profile Picture">
          <Dragger>
            <p>Drag and Drop Image File to Upload (.jpeg, .png)</p>
            <u>Or Browse Your Computer</u>
          </Dragger>
        </Form.Item>

        <Form.Item>
          <Button
              style={{ display: 'inline-block', margin: '0 8px' }}>
            +Add Guardian or Adult
          </Button>
        </Form.Item>

      </Form>
  );
};

export default SignupFormAdult;