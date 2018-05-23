import _ from 'lodash';
import './style.css';
// import Img from './image.jpg';
import Data from './data.xml';
import { printMe } from './print';

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    /*     var myImage = new Image();
        myImage.src = Img;
        element.appendChild(myImage); */
    console.log(Data);
    printMe();
    return element;
}

document.body.appendChild(component());