let hojas = "";

[10,2].forEach(function(a){
    Array(a).fill("").forEach(function(x,i){
        hojas+=([...Array(1+i).fill("<span class='color'>*~*</span>")].join(""))+"<br/>";
    });
});
document.querySelector(".tree").innerHTML = hojas;

let color = document.querySelectorAll(".color");

function animation(){
    for(let i = 0; i<color.length; i++){
        let time = i/100+1;
        color[i].style.animation = "color " + time +"s infinite";

    }
}

window.addEventListener("load",animation);