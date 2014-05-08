window.onload = function(){
    'use strict';
    console.log('Onload ...');
    registerButtonHandler();
};
//registerButtonHandler();
//document.addEventListener('DOMContentLoaded',registerButtonHandler);

function registerButtonHandler(){
    'use strict';
    console.log('Registering handler ...');
    $('addBtn').on('click', addText);

    // addEventListener geht nicht für IE -> attachEvent für IE !!
    // var addBtn = document.getElementById('addBtn');
    // addBtn.addEventListener('click', addText);

    // use jQuery!
}

function addText(){
    'use strict';
    var input = document.getElementById('input');
    var node=document.createElement('h3');
    var textnode=document.createTextNode(input.value);
    node.appendChild(textnode);
    document.getElementById('do').appendChild(node);
    input.value = '';
}