const SN= document.querySelector('.SN');
const menu = document.querySelector('.menu-navegacion');




SN.addEventListener('click', ()=>{
    menu.classList.toggle("spread")

})
window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != SN){
        console.log('cerrar')
        menu.classList.toggle("spread")
        }
    })