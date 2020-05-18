import React, { Component } from 'react';
import ReactDom from 'react-dom';
import router from './router';
import * as style from './app.scss';

ReactDom.render(
    router(),
    document.getElementById('root')
);