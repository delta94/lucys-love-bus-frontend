import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Import antd stylesheets
import 'antd/dist/antd.css';
import './App.less';
import Home from './containers/home/Home';
import BlockTemplate from './containers/template-1-col-block/Template';
import GridTemplate from './containers/template-24-col-grid/Template';
import SignupConfirmationPF from './containers/signup-confirmation/SignupConfirmationPF';
import SignupConfirmationGM from './containers/signup-confirmation/SignupConfirmationGM';
import SignupGM from './containers/signup-gm/SignupGM';

import NotFound from './containers/not-found/NotFound';
import NavBar from './components/navbar';
import Footer from './components/Footer';
import Signup_PF_P1 from './containers/Signup_PF_P1/Signup_PF_P1';
import { Layout } from 'antd';
const { Content } = Layout;

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="C4C,code,for,community,code4community,codeforcommunity,northeastern,boston"
        />
      </Helmet>

      <Router>
        <Layout className="app-flex-container">
          <NavBar />
          <Content className="content-padding">
            <div className="content-inner-container">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/block-template" exact component={BlockTemplate} />
                <Route path="/grid-template" exact component={GridTemplate} />
                <Route
                  path="/signup-confirmation-gm"
                  exact
                  component={SignupConfirmationGM}
                />
                <Route
                  path="/signup-confirmation-pf"
                  exact
                  component={SignupConfirmationPF}
                />
                <Route path="/signup-pf-p1" exact component={Signup_PF_P1} />
                <Route path="/signup-gm" exact component={SignupGM} />
                <Route path="*" exact component={NotFound} />
              </Switch>
            </div>
          </Content>
          <Footer />
        </Layout>
      </Router>
    </>
  );
};

export default App;
