import 'babel-polyfill';
import _ from 'lodash';
import './style.css';
// import Img from './image.jpg';
import Data from './data.xml';
import * as typescript from './typescript';
import React from 'react';

import { fuck, ReactApp, render } from './component';

import './share';

/**
 * render xml data
 */
console.log(Data);

function component(className) {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    if (!className) {
        element.classList.add('hello');
        element.classList.add('font-size');
        element.classList.add('font600');
    } else {
        element.classList.add(className);
    }

    /*     var myImage = new Image();
        myImage.src = Img;
        element.appendChild(myImage); */
    return element;
}
console.log('typescript:', typescript);
typescript.print();
typescript.fuck();
// print.printMe();
fuck('Trump');

document.body.appendChild(component());
document.body.appendChild(component('fuckTrump'));

console.log('ReactApp', render);
render(( < ReactApp / > ), document.querySelector('.fuckTrump'));