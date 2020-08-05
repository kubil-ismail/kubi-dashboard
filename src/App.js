import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Sidebar
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideNav, { NavItem, NavIcon } from '@trendmicro/react-sidenav';
import { Row, Col } from 'react-bootstrap';
import {
  FaPhoneAlt,
  FaAt,
  FaComment,
  FaCommentAlt,
  FaTelegramPlane,
  FaWhatsapp,
  FaFacebookMessenger,
  FaFacebookSquare,
  FaTwitter,
  FaTwitterSquare,
  FaInstagram,
} from 'react-icons/fa';

// Use Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// Pages
import Navbar from './component/NavbarApp';
import Dashboard from './pages/Dashboard';

const page = [
  {
    title: 'Voice',
    icon: <FaPhoneAlt />
  },
  {
    title: 'Email',
    icon: <FaAt />
  },
  {
    title: 'SMS',
    icon: <FaCommentAlt />
  },
  {
    title: 'Chat',
    icon: <FaComment />
  },
  {
    title: 'Tele',
    icon: <FaTelegramPlane />
  },
  {
    title: 'WA',
    icon: <FaWhatsapp />
  },
  {
    title: 'MSG',
    icon: <FaFacebookMessenger />
  },
  {
    title: 'FB',
    icon: <FaFacebookSquare />
  },
  {
    title: 'TW',
    icon: <FaTwitter />
  },
  {
    title: 'TDM',
    icon: <FaTwitterSquare />
  },
  {
    title: 'IG',
    icon: <FaInstagram />
  },
];

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route render={({ location, history }) => (
            <React.Fragment>
              <Row className="wrapper">
                <Col lg={12}>
                  <Navbar />
                </Col>
                <Col lg={1} className="sideNav d-lg-block d-none">    
                  <SideNav
                    onSelect={(selected) => {
                      const to = '/' + selected;
                      if (location.pathname !== to) {
                        history.push(to);
                      }
                    }}
                  >
                    <SideNav.Nav defaultSelected="home" className="mt-4">
                      {page.map((val, key) => (
                        <NavItem className="my-3 px-3">
                          <NavIcon>
                            <div className="d-flex justify-content-center align-self-center">
                              {val.icon}
                            </div>
                          </NavIcon>
                        </NavItem>
                      ))}
                    </SideNav.Nav>
                  </SideNav>
                </Col>
                <Col lg={11} className="main">
                  <Route path="/" component={Dashboard} />
                </Col>
              </Row>
            </React.Fragment>
          )}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
