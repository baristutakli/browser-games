
let car = document.querySelector("#car");
let car2 = document.querySelector("#car2");

let count = 0;
let count2 = 0;

let space = document.querySelector("#space");

space.addEventListener('keydown', logKey)


function logKey(e) {
    
    if (e.code == "ArrowLeft") {
        if (count >= 50) {
            count -= 50;
            car.style = "margin-left:" + count + "px";
        }

    } else if (e.code == "ArrowRight") {
        if (count>1220) {
            count=1220;
        }else{
            count += 50;
            car.style = "margin-left:" + count + "px";
        }
        
    }

}
function start() {
    count2 = Math.floor(Math.random() * 100);
    while (count2 < 1280) {

       
        wait(2);
        count2 += 10;
        console.log(count2);


    }
}
function wait(i) {
    setTimeout(function() {
        car2.style = "margin-left:" + count2 + "px";
        
        // Add tasks to do
    }, 2000 );
  }