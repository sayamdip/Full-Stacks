// Immediately Invoked Function Expression (IIFE)

// Named IIFE
(function chai(){
    console.log("DB CONNECTED")
})();

// Unnamed IIFE
((name) => {
    console.log(`DB CONNECTED Three, ${name}`)
})("Sayamdip");