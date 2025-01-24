let dark=false;
let i=10;
function change_Color(){
    dark=!dark;
    console.log(dark)
}
document.documentElement.style.setProperty('--txt-color','#fff');
function change_Color(){
    let tYil=document.getElementById("inId").value;
    const vaqt= new Date ();
    const yil=vaqt.getFullYear();
    console.log(yil-tYil)
}
setInterval(()=>{
    // i=i+1;
    // console.log(i);
    if(i>0){
        i==10
    }
    i=i-1;
        console.log(i);
},200)