import React from 'react'

import Navbar from '../Navbar'
import Footer from '../Footer'
import './index.scss'
import Head from './Head'

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  require('smooth-scroll')('a[href*="#"]', {
    offset: 60,
  });
}

const Layout = ({ children, location }) => (
  <div className="layout"> 
    <Head />
    <Navbar location={location} />
    <div className="container-fluid">{children}</div>
    <Footer />
  </div>
);

export default Layout;
