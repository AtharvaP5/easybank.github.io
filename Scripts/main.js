const ham = document.querySelector('#ham');
const dropdown = document.querySelector('.links');
const close = document.querySelector('#close');


function myfunction (){
    dropdown.classList.toggle('pop');
    ham.style.display = 'none';
    close.style.display = 'block';
}
ham.addEventListener('click',myfunction, false);

function function2(){
    ham.style.display = 'block'
    close.style.display = 'none';
    dropdown.classList.toggle('off')
}


close.addEventListener('click', function2, false)