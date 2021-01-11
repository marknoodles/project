function myFunction(){
    document.getElementById("dropDown-menu").classList.toggle("show");
    // document.getElementById("calendar").classList.toggle("show");
}



let count = 0;
let countNumber = document.getElementById("clicks");
function countPlus(){
    count++;
    clicks.value = count;
    if(count >= 9){
        count = 8;
    }
}
function countMinus(){
  if (count > 0) {
    count--;
    clicks.value = count;
  }  
}
