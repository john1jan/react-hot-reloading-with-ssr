'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';
import DataWrapper from './components/DataWrapper';
import axios from 'axios';

const data = JSON.parse(document.getElementById('preloadedData').textContent);

ReactDOM.render(<DataWrapper data={data}><AppRoutes/></DataWrapper>, document.getElementById('main'));
