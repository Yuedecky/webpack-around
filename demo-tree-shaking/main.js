import {cube} from './math'
function component(){
    var element = document.createElement('pre')

    element.innerHTML = [
        "hello webpack",
        "5 cubed is eaqul to"+cube(5)
    ].join('\n\n')

    return element
}

document.body.appendChild(component())