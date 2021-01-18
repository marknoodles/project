//function
function myFunction(){
    document.getElementById("dropDown-menu").classList.toggle("show");
}
function calendarFunction(){
  document.getElementById("myCalendar").classList.toggle("show");
}

// variables
var countBabies = 0;
var countAdults = 0;
var countKids = 0;
// function init
// type:  'babies', 'kids', 'adults'
function init() {
  document.getElementById("adultsCounter").innerHTML = countAdults;
  document.getElementById("babiesCounter").innerHTML = countBabies;
  document.getElementById("kidsCounter").innerHTML = countKids;

}


// counter logic
// type: 'babies', 'kids', 'adults'
let countNumber = document.getElementById("clicks");
function countPlus(type) {
  switch (type) {
    case 'babies':
      countBabies += 1;
      document.getElementById("babiesCounter").innerHTML = countBabies;
      break;
    case 'adults':
      countAdults += 1;
      document.getElementById("adultsCounter").innerHTML = countAdults;
      break;
    case 'kids':
      countKids++;
      document.getElementById("kidsCounter").innerHTML = countKids;
      break;
  }
}
function countMinus(type) {
  switch (type) {
    case 'babies':
      countBabies >= 0;
      document.getElementById("babiesCounter").innerHTML = countBabies--;
      break;
    case 'adults':
      countAdults >= 0;
      document.getElementById("adultsCounter").innerHTML = countAdults--;
      break;
    case 'kids':
      countKids >= 0;
      document.getElementById("kidsCounter").innerHTML = countKids--;
      break;
  }
}

// we fire up init when all the content on page is ready
document.addEventListener('DOMContentLoaded', function () {
  init();
});

// function countGuests(type){
//   kidsCounter + adultsCounter + babiesCounter
// }