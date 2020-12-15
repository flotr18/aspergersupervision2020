import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import './index.css';

import './css/style_contact.css';
import './css/style_footer.css';
import './css/style_game.css';
import './css/style_global.css';
import './css/style_header.css';
import './css/style_partners.css';
import './css/style_syndrome.css';


import Header from './Header';
import Milo_part_1 from "./Milo_part_1";
import Eliott_part_2 from "./Eliott_part_2";
import Vincent_part_3 from "./Vincent_part_3";
import Julien_part_4 from "./Julien_part_4";
import Florent_part_5_contact from "./Florent_part_5_contact";
import Router from "react-router-dom/es/Router";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>>

      <Header />
      < Milo_part_1 />
    <Eliott_part_2 />
    <Vincent_part_3 />
    <Julien_part_4 />
    <Florent_part_5_contact />





      </Router>,
  document.getElementById('root')
);


