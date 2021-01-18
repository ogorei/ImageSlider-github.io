//created by Reina N.Suzuki 

const slider= document.getElementById("slider");
//setting the images in array assigning 0-2
const images=[
"https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&dpr=1&w",
"https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&dpr=1&",
"https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
"https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"];
//the counter is set to the same number as the index in array images
let counter=0;

function nextSlide(){
    counter++
    //condition: if the array is at the last position greater or equal to the lenght, 
    //its position will be reset to 0
    if(counter >= images.length){
        counter = 0;
    }
    //below we assign the src attribute, and pass the counter to add all the images in the array
    slider.src=images[counter];
}
document.getElementById('btn-left').addEventListener('click', nextSlide);



function prevSlide(){
    //condition: if the array is at the last position greater or equal to the lenght, 
    //its position will be reset to 0
    counter--;
    if(counter < 0){
        counter= images.length-1;
    }
    //below we assign the src attribute, and pass the counter to add all the images in the array
    slider.src=images[counter];
}

document.getElementById('btn-right').addEventListener('click', prevSlide);


