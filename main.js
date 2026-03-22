const elements = document.querySelectorAll("*");

elements.forEach(e => {
    e.classList.forEach(cls=> {
        console.log(cls);
    })
});
elements.forEach(e => {
    e.classList.forEach(cls=> {
       //text colors
        if(cls ==="tush-red"){
            e.style.color = "red";
        }
        if(cls ==="tush-blue"){
            e.style.color = "blue";
        }
        if(cls ==="tush-yellow"){
            e.style.color = "yellow";
        }
        if(cls ==="tush-green"){
            e.style.color = "green";
        }
        if(cls ==="tush-violet"){
            e.style.color = "violet";
        }
        
       
        
    });
})
elements.forEach(e => {
    e.classList.forEach(cls=> {
        //background colors
 if(cls ==="tush-bg-red"){
            e.style.backgroundColor = "red";
        }
        if(cls ==="tush-bg-yellow"){
            e.style.backgroundColor = "yellow";
        }
        if(cls ==="tush-bg-green"){
            e.style.backgroundColor = "green";
        }
        if(cls ==="tush-bg-blue"){
            e.style.backgroundColor = "blue";
        }
        
        if(cls ==="tush-bg-violet"){
            e.style.backgroundColor = "violet";
        }
    })
})
elements.forEach(e => {
    e.classList.forEach(cls=> {
 if(cls.startsWith("tush-p-")){
    //padding -- tush-p-11 -- take the third element and add padding in it
            e.style.padding = cls.split("-")[2]+ "px";
        }

 if(cls.startsWith("tush-m-")){
    //margin -- tush-m-11 -- take the third element and add padding in it
            e.style.margin = cls.split("-")[2]+ "px";
        }
    
    })
})

elements.forEach(e =>{
    e.classList.forEach(cls =>{
        //flex-box
        if (cls === "tush-flex"){
            e.style.display = "flex" ;
        }

        if(cls=== "tush-center"){
            e.style.justifyContent ="center";
            e.style.alignItems ="center";

        }
    })
})

elements.forEach(e =>{
    e.classList.forEach(cls =>{
        if (cls.startsWith("tush-w-"))
        {
            e.style.width = cls.split("-")[2] + "px" ;
        }
    e.classList.forEach(cls =>{
        if (cls.startsWith("tush-h-"))
        {
            e.style.height = cls.split("-")[2] + "px" ;
        }
    })
})
});
