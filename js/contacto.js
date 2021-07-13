const CO = document.querySelector('.CO');
const menu = document.querySelector('.menu-navegacion');

console.log(menu)
console.log(CO)


CO.addEventListener('click', ()=>{
    menu.classList.toggle("spread")

})
window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != CO){
        console.log('cerrar')
        menu.classList.toggle("spread")
        }
    })