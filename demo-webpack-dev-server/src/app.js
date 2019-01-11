import _ from 'lodash';
import printMe from './index';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe.click;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());


if (module.hot) {
    console.log('module is enabled hot plugin')
    module.hot.accept('./index.js', function () {
        console.log(printMe.name)
    })
}