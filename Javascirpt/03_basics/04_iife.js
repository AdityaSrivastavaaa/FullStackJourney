// Immediately Invoked Funvtion expression(IIFE)

(function chai(){
    //named iife
    console.log("DB CONNECTED")
})();

((name)=>{
    console.log(`DB Connected two ${name}`);
})("Aditya")

// iife is used to prevemtion the pollution caused by global scope object 