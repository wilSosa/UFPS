$(document).ready(function(){
    
    $(".contenedor-formularios").find("input, textarea").on("keyup blur focus", function (e) {

        var $this = $(this),
          label = $this.prev("label");

        if (e.type === "keyup") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.addClass("active highlight");
            }
        } else if (e.type === "blur") {
            if($this.val() === "") {
                label.removeClass("active highlight"); 
                } else {
                label.removeClass("highlight");   
                }   
        } else if (e.type === "focus") {
            if($this.val() === "") {
                label.removeClass("highlight"); 
            } 
            else if($this.val() !== "") {
                label.addClass("highlight");
            }
        }

    });

    $(".tab a").on("click", function (e) {

        e.preventDefault();

        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");

        target = $(this).attr("href");

        $(".contenido-tab > div").not(target).hide();

        $(target).fadeIn(600);

    });
    
});

function registro(){
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const usuario = document.querySelector("#usuario").value;
    const email = document.querySelector("#email").value;
    const contra = document.querySelector("#contra").value;
    const contrar = document.querySelector("#contrar").value;
    
    const user = {nombre:nombre, apellido:apellido, usuario:usuario, email:email, contra:contra, contrar:contrar} 

   

    localStorage.setItem('usuario', JSON.stringify(user));

    alert(JSON.stringify(localStorage.getItem('usuario')));

    

}

function iniciar(){
    const usuario = document.querySelector("#usuario_ini").value;
    const contra = document.querySelector("#contra_ini").value;
    const user = JSON.parse(localStorage.getItem('usuario'));

    if(usuario == user.usuario && contra == user.contra){

       window.location.href = "../HTML/index2.html"

    }else{
        alert("DATOS INCORRECTOS :(");
    }
}