function myFunction(){
    document.getElementById("dropDown-menu").classList.toggle("show");
}
function countClick(){
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}