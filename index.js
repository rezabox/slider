const imgBo=document.querySelector(".imgBo");
const slider=imgBo.getElementsByTagName('img');
console.log(slider);
let i =0;

function next(){
    slider[i].classList.remove('active');
    i =  (i+1)% slider.length;
    slider[i].classList.add('active');
    console.log(i);
}
function prev(){
    slider[i].classList.remove('active');
    i = (i - 1+ slider.length) % slider.length;
    slider[i].classList.add('active');
    console.log(i); 
}