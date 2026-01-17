
let grids = document.querySelector(".container")

for(let i=0;i<256;i++){
    let div = document.createElement("div");
    div.className = "grid";
    grids.appendChild(div);
}

let btn = document.querySelector(".button");

let size=0;

btn.addEventListener("click",() => {
    size = prompt("Enter the number of squares per side");
        if(size > 100) {
            alert("Enter the size below 101");
        }

        else{
            grids.innerHTML="";
            for(let i=0;i<size*size;i++){
                let div = document.createElement("div");
                div.className = "grid";
                grids.appendChild(div);

            }
            grids.style.gridTemplateColumns = `repeat(${size},1fr)`;

        }


}
);

