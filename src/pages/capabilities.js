import React from 'react';
import Layout from '../components/layout';
// import Image from './image';
// import Points from './points';
// import PropTypes from 'prop-types';
import SEO from '../components/seo';
import Fade from 'react-reveal/Fade';
import Header from '../components/header';
 
import JC from "../assets/jc.png"
import Valerian from "../assets/valerian.png"
import Banner from "../assets/banner.png"
import HTA from "../assets/hta.png"

import Origami from "../assets/origami.png"

import JCLogo from "../assets/jc-logo.png"
import Crown from "../assets/crown.png"
import Leaf from "../assets/leaf.png"
import Bookmark from "../assets/bookmark.png"

const CapabilitiesPage = () => {
  var todoswipe = {
    backgroundImage: `url("${"https://cdn.dribbble.com/users/4046465/screenshots/11132424/media/7b96002c6fdf8b6768e2c0fe65407043.jpg"}")`,
    
  }
  var origami = {
    backgroundImage: `url("${Origami}")`,
    
  }
  return(
  <Layout>
    <SEO title="Varun Sindwani | Capabilities" />
    <div>What can i do</div>
  </Layout>
  )
}
export default CapabilitiesPage;