window.addEventListener("load" , function(){
    const log = console.log;
    
    document.querySelector(".main_table").addEventListener("click" , (e)=>{
        log(e.target);
    });

});