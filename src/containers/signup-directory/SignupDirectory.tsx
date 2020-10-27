import React from 'react';
import { Helmet } from 'react-helmet';
import './signup-directory.less';
import { Typography, Card, Space, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Text, Paragraph } = Typography;

/*
Template for future page components.

AntD Components:
https://ant.design/components/overview/
*/

const SignupDirectory: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Title goes here</title>
        <meta name="description" content="Description goes here." />
      </Helmet>
      <div className="content-container">
        {/*
          Place relevant components in here
        */}
        <Space className="card-center">

          <Card className="signup-card" hoverable>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>

            <Card className="signup-card" hoverable>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          

         
        </Space>


            
      </div>
    </>
  );
};

export default SignupDirectory;
