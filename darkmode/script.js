$(document).ready(function(){
    $(".radio-btn").click(function(){ // aqui é onde ele deixa a tag clicável
        $(".radio-inner").toggleClass("active") 
        $("body").toggleClass("dark")
    })
})