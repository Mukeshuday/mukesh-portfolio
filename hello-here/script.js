let modalContainer = document.querySelector('.model-container');
let wherebtn = document.getElementById('where');
let closeBtn = document.getElementById('close-btn');






wherebtn.addEventListener('click',function(){
    console.log('hi');
    modalContainer.style.display="block";
});


closeBtn.addEventListener('click',function(){
    modalContainer.style.display='none';
})


window.addEventListener('click',function(e){
    const target = e.target;
    if(target===modalContainer)  
        {
            modalContainer.style.display='none';
        }  
})