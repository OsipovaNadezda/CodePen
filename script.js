const button = document.querySelector('button');

button.addEventListener('click', function(){
    let inputValue = document.querySelector('input');
    let ul = document.querySelector('ul');
    let createElement = document.createElement('li');

    if(inputValue.value){
        createElement.textContent = inputValue.value;
        ul.append(createElement);
        inputValue.value='';
    }
})