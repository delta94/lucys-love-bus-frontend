import React from 'react';
import { Helmet } from 'react-helmet';
import './Signup_PF_P2.less';
import {Button, Form, Typography} from 'antd';
import SignupFormAdult from '../../components/SignupForms/SignupFormAdult';
import SignupFormChild from '../../components/SignupForms/SignupFormChild';

const { Title, Paragraph } = Typography;

/*
Template for future page components.
AntD Components:
https://ant.design/components/overview/
*/

// tslint:disable-next-line:variable-name
const Signup_PF_P2: React.FC = () => {
  return (
      <>
        <Helmet>
          <title>Sign Up</title>
          <meta name="description" content="Description goes here." />
        </Helmet>
        <div className="content-container">

          <div className= "title">
            <Title level={5}>SIGN UP</Title>
            <Title level={3}>Registering as a Participating Family</Title>
            <Paragraph>Tell us about your children and/or any other members you are registering under this account.</Paragraph>
          </div>

          <Title level={5}>Additional Guardians or Adults (18+ yrs)</Title>

          <SignupFormAdult> </SignupFormAdult>

          <Title level={5}>Child</Title>

          <SignupFormChild> </SignupFormChild>

          <Form.Item>
            <Button
                style={{ display: 'inline-block', margin: '0 8px' }}>
              Back
            </Button>
            <Button type="primary" htmlType="submit"
                    style={{ display: 'inline-block', margin: '0 8px' }}>
              Next
            </Button>
          </Form.Item>

        </div>
      </>
  );
};

export default Signup_PF_P2;
