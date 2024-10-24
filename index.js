
m = Math.floor(Math.random() * 6) + 1;
n = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src","././images/dice"+ m +".png");
document.querySelector(".img2").setAttribute("src","././images/dice"+ n +".png");
if(m > n){
    document.querySelector("h1").textContent="Player 1 wins";
}
else if(m < n){
    document.querySelector("h1").textContent="Player 2 wins";
}
else{
    document.querySelector("h1").textContent="Draw";
}
