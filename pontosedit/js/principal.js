/*----------------formulario------------- */
function validarcampo(){
    var retorna = true;
    if(document.formCliente.nome.value ==""){
        alert("O campo nome é obrigatorio!");
        retorna=false;
    }
    if(retorna == true){
      if(document.formCliente.sobrenome.value ==""){
          alert("O campo sobrenome é obrigatorio!");
          retorna=false;
      }
}
if(retorna == true){
    if(document.formCliente.email.value ==""){
        alert("O campo email é obrigatorio!");
        retorna=false;
    }
}
if(retorna == true){
    if(document.formCliente.msg.value ==""){
        alert("Digite sua mensagem!");
        retorna=false;
    }
}
    return false;
}
/*----------------evento menu------------- */
function mouse(){
    classe = document.getElementById("btn01");
    if(classe.className == "btnjs"){
        classe.className = "btnjs2";
    }
    
}
function mousefora(){
    classe = document.getElementById("btn01");
    if(classe.className == "btnjs2"){
        classe.className = "btnjs";
    }
}

function mouse2(){
    classe = document.getElementById("btn02");
    if(classe.className == "btnjs"){
        classe.className = "btnjs2";
    }
    
}
function mousefora2(){
    classe = document.getElementById("btn02");
    if(classe.className == "btnjs2"){
        classe.className = "btnjs";
    }
}

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

function entra(){
    anm = document.getElementsByClassName('card-img-top')
    if(anm.className == "card-img-top:hover"){
        anm.className == "card-img-top"
    }
}


/*modo dark */
function modDark(){
    classe = document.getElementById("mode");
    if(classe.className == "branco"){
        classe.className = "preto";
    }
    else{
        classe.className = "branco";
    }
    
}
