/*evento menu */

function mouse3(){
    classe = document.getElementById("btn03");
    if(classe.className == "btnjs"){
        classe.className = "btnjs2";
    }
    
}
function mousefora3(){
    classe = document.getElementById("btn03");
    if(classe.className == "btnjs2"){
        classe.className = "btnjs";
    }
}

/*---------Formulario login----------- */
function verificaCampoLogin(){
    var retorna = true;
    if(document.formLogin.user.value ==""){
        alert("O campo usuario é obrigatorio!");
        retorna=false;
    }
    if(retorna == true){
        if(document.formLogin.senha.value ==""){
            alert("O campo senha é obrigatorio!");
            retorna=false;
        }
    }
}