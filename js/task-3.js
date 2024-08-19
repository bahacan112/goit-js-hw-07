const input=document.getElementById('name-input');
const h1text=document.getElementById('name-output');
input.addEventListener('input',()=>{
    const value=(input.value).trim();
    if(value.length>0){
        h1text.innerText=value;
    }else{
        h1text.innerText='Anonymous';
    }
})
