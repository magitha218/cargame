canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
car_width=120;
car_height=70;
car_image="https://postimg.cc/9rqYz9HM";
car_x=10;
car_y=10;
car2_width=120;
car2_height=70;
car2_image="https://postimg.cc/9rqYz9HM";
car2_x=10;
car2_y=10;
background_image="https://i.postimg.cc/KzWwHPcq/racing.gif";
function add(){
backround_imgtag=new Image();
backround_imgtag.onload=uploadbackground;
backround_imgtag.src=background_image;
car_imgtag=new Image();
car_imgtag.onload=car_image; 
car_imgtag.src=car_image;                                        
car2_imgtag=new Image();
car2_imgtag.onload=car2_image;
car2_imgtag.src=car2_image;
}
function uploadbackground(){
    ctx.drawImage(backround_imgtag,0,0,canvas.width,canvas.height);
}
function uploadcar(){
    ctx.drawImage(car_imgtag,car_x,car_y,car_width,car_height);
}
function uploadcar2(){
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='38') 
{
    car_up();  
    console.log("up arrow key");
    }
    if(keyPressed=='40') 
{
    car_down();  
    console.log("down arrow key");
    }
    if(keyPressed=='37') 
{
    car_left();  
    console.log("left arrow key");
    }
    if(keyPressed=='39') 
{
    car_right();  
    console.log("right arrow key");
    }  
    if(keyPressed=='87') 
{
    car2_up();  
    console.log("key w");
    }
    if(keyPressed=='89') 
{
    car2_down();  
    console.log(" key y");
    }
    if(keyPressed=='86') 
{
    car2_left();  
    console.log("key v");
    }
    if(keyPressed=='88') 
{
    car2_right();  
    console.log("key x");
    }
}
function car_up(){
    if(car_y>=0){
        car_y=car_y-10;
        console.log("When up arrow is pressed, x = " + car_x + " | y = " +car_y);
        uploadbackground();
        uploadcar();
    }
}
function car_down(){
    if(car_y<=500){
        car_y=car_y+10;
        console.log("When down arrow is pressed, x = " + car_x + " | y = " +car_y);
        uploadbackground();
        uploadcar();
    }
}
function car_left(){
    if(car_x>=0){
        car_x=car_x-10;
        console.log("When left arrow is pressed, x = " + car_x + " | y = " +car_y);
        uploadbackground();
        uploadcar();
    }
}
function car_right(){
    if(car_x<=700){
        car_x=car_x+10;
        console.log("When right arrow is pressed, x = " + car_x + " | y = " +car_y);
        uploadbackground();
        uploadcar();
    }
}
function car2_up(){
    if(car2_y>=0){
        car2_y=car2_y-10;
        console.log("When up arrow is pressed, x = " + car2_x + " | y = " +car2_y);
        uploadbackground();
        uploadcar2();
    }
}
function car2_down(){
    if(car2_y<=500){
        car2_y=car2_y+10;
        console.log("When down arrow is pressed, x = " + car2_x + " | y = " +car2_y);
        uploadbackground();
        uploadcar2();
    }
}
function car2_left(){
    if(car2_x>=0){
        car2_x=car2_x-10;
        console.log("When left arrow is pressed, x = " + car2_x + " | y = " +car2_y);
        uploadbackground();
        uploadcar2();
    }
}
function car2_right(){
    if(car2_x<=700){
        car2_x=car2_x+10;
        console.log("When right arrow is pressed, x = " + car2_x + " | y = " +car2_y);
        uploadbackground();
        uploadcar2();
    }
}
if(car1_x > 700)
{
 console.log("car1 Won");
 document.getElementById('game_status').innerHTML="car 1 Won!!"; 
}