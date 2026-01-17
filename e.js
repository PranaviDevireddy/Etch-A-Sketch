
let grids = document.querySelector(".container")

function createGrid(size){
    grids.innerHTML="";
            for(let i=0;i<size*size;i++){
                let div = document.createElement("div");
                div.className = "grid";
                grids.appendChild(div);

            }
            grids.style.gridTemplateColumns = `repeat(${size},1fr)`;

    addclickevents();
}

function addclickevents(){
    const gridss = document.querySelectorAll(".grid");
        gridss.forEach((grid)=>{
            grid.addEventListener("click",()=>{
                grid.style.backgroundColor = "blue";
            });
        })
}

createGrid(16);


let btn = document.querySelector(".button");

btn.addEventListener("click",() => {

    size = prompt("Enter the number of squares per side");
        if(size > 100) {
            alert("Enter the size below 101");
        }

        else{
            createGrid(size);
        }
    });


let bt = document.querySelector("#bt");

bt.addEventListener("click",()=>{
    const gridss = document.querySelectorAll(".grid");
    gridss.forEach((grid)=>{
        grid.style.backgroundColor=" rgb(246, 246, 246)";
    });
});

let rm =  document.querySelector("#remove");

rm.addEventListener("click",()=>{
    const gridss = document.querySelectorAll(".grid");
    gridss.forEach((grid)=>{
        grid.addEventListener("click",()=>{
            grid.style.backgroundColor=" rgb(246, 246, 246)";
        })
    });
})

let complete=document.querySelector("#rmcom");

rmcom.addEventListener("click",()=>{
    addclickevents();
});

let x= document.querySelector("#color");
x.addEventListener("click",()=>{
    let color = prompt("Enter the color");
    grid.style.hover.backgroundColor = "${color}";
    addclickevents();
});



