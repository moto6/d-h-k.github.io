//===============================================
// Default Objs...
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor"); 
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave")

//===============================================






//================================================
// default varialbe
const INIT_COLOR = "2c2c2c";
const CAVAS_SIZE = 700;
//
canvas.width = CAVAS_SIZE;
canvas.height = CAVAS_SIZE;
ctx.strokeStyle = INIT_COLOR;
ctx.fillStyle = INIT_COLOR;
ctx.fillStyle = "white";
ctx.fillRect(0,0,CAVAS_SIZE,CAVAS_SIZE);
//
ctx.lineWidth = 2.5;
let painting = false;
let filling = false;
//================================================



//===============================================
// functions....
function stopPainting() {
    painting = false;
    //console.log("end");
}

function startPainting() {
    painting = true;
    //console.log("start");
}


function mMV(event) {
    //console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;

    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else {
        //console.log("Line : "+x+y);
        ctx.lineTo(x,y);
        ctx.stroke();
    }

}


function mDW(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    //console.log('Down : ' + x + ' '+ y);
    painting = true;
}

function mUP(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    //console.log('UP : ' + x + ' '+ y);
    painting = false;
}


function changeColorClick(event) {
    console.log(event.target.style);
}

function handleColorClick(event) {
    
    const color = event.target.style.backgroundColor;
    //console.log(event);
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handlRangeChange(event) {
    console.log(event.target.value);


}
//===============================================




function handleModeClick(event) {

    console.log(event);
    if(filling == true) {
        filling = false;
        mode.innerText = "Fill";

    }else {
        mode.innerText = "PAINT";
        filling = true
        ctx.fillStyle = ctx.strokeStyle;
    }
}

function handleCanvasClick(event) {
    //painting 상태에서 끝나면 자동으로 Filling 되는 문제 해결을 위함.
    if(filling) {
        ctx.fillRect(0,0,CAVAS_SIZE,CAVAS_SIZE);
    }else {}
}

function handleCM(event) {
    //console.log(event);
    event.preventDefault();
}


function handleSaveClick(event) {
    const image = canvas.toDataURL("imalge/jpeg");
    //console.log(image);
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS.jpeg";
    link.click();
}

//===============================================
//Event mactcher
if(canvas) {
    canvas.addEventListener("mousemove",mMV);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
    canvas.addEventListener("click",handleCanvasClick);
    canvas.addEventListener("contextmenu",handleCM);
}


console.log(Array.from(colors));
//Array.from(color).forEach(color => 
//    color.addEventListener("click",handleColorClick));
    
Array.from(colors).forEach(potato =>
    potato.addEventListener("click", handleColorClick)
);


if(range) {
    range.addEventListener("input",handlRangeChange);
}


if(mode) {
    mode.addEventListener("click",handleModeClick);
}


if(saveBtn) {
    saveBtn.addEventListener("click",handleSaveClick);
}