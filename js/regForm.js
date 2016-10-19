/**
 * Created by digitalhouse on 11/10/16.
 */
var form = null;

var nameReg = null;

var lastNameReg = null;

var emailReg = null;

var passwordReg = null;

var confirmPasswordReg = null;

var submitButton = document.getElementById("submitButton");

var nameRegIncorrect = false;

var apellidoRegIncorrect = false;

var emailIncorrect = false;

var incorrectPass = false;


window.onload = function () {

    var nombreRegsDiv = document.getElementById("nombreregsdiv");
    var apellidoRegsDiv = document.getElementById("apellidoregsdiv");
    var emailRegsDiv = document.getElementById("emailregsdiv");
    var passwordRegsDiv = document.getElementById("passwordregsdiv");
    var confirmPasswordRegsDiv = document.getElementById("confirmpassregsdiv");
    submitButton = document.getElementById("submitButton");


    submitButton.onclick = function (submit) {
        console.log("click");
        form = document.getElementById("modalregs");

        nameReg = document.getElementById('nombreregs').value;

        lastNameReg = form.getElementsByClassName("apellidoregs")[0].value;

        emailReg = form.getElementsByClassName("emailregs")[0].value;

        passwordReg = form.getElementsByClassName("passwordregs")[0].value;

        confirmPasswordReg = form.getElementsByClassName("confirmpassregs")[0].value;

        var regexMail = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

        if (nameReg==null || nameReg==""){
            if (!nameRegIncorrect){

                nombreRegsDiv.innerHTML ="<div class='usernameregs' id='nombreregsdiv'><label>Nombre</label><input class='nombreregs' id='nombreregs' type='text' placeholder='Nombre'>" + "<label style='color: red; margin-top: 5px'>Nombre Incorrecto</label>" + "</div>";
                nameRegIncorrect = true;
            }
        }else {
            nombreRegsDiv.innerHTML = "<div class='usernameregs' id='nombreregsdiv'><label>Nombre</label><input class='nombreregs' id='nombreregs' type='text' placeholder='Nombre' value='" + nameReg + "'></div>";
            nameRegIncorrect = false;
        }


        if (lastNameReg==null || lastNameReg==""){
            if (!apellidoRegIncorrect){
                apellidoRegsDiv.innerHTML ='<div class="usernameregs" id="apellidoregsdiv"><label>Apellido</label><input class="apellidoregs" type="text" placeholder="Apellido">' + '<label style="color: red; margin-top: 5px">Apellido Incorrecto</label>' +'</div>';
                apellidoRegIncorrect = true;
            }
        }else {
            apellidoRegsDiv.innerHTML = '<div class="usernameregs" id="apellidoregsdiv"><label>Apellido</label><input class="apellidoregs" type="text" placeholder="Apellido" value="' + lastNameReg + '"></div>';
            apellidoRegIncorrect = false;
        }

        if (!(regexMail.test(emailReg))){
            if (!emailIncorrect){
                emailRegsDiv.innerHTML = '<div class="usernameregs" id="emailregsdiv"><label>Correo electronico</label><input class="emailregs" type="email" placeholder="Email">' + '<label style="color: red; margin-top: 5px">Email Incorrecto</label>' + '</div>';
                emailIncorrect = true;
            }
        }else {
            emailRegsDiv.innerHTML = '<div class="usernameregs" id="emailregsdiv"><label>Correo electronico</label><input class="emailregs" type="email" placeholder="Email" value="'+ emailReg +'"></div>';
            emailIncorrect = false;
        }
        if ((passwordReg != confirmPasswordReg) || passwordReg == "" || passwordReg == null){

            if (!incorrectPass){
                passwordRegsDiv.innerHTML = '<div class="usernameregs" id="passwordregsdiv"><label>Password</label><input class="passwordregs" type="password" placeholder="Password">'+'<label style="color: red; margin-top: 5px">Contraseña invalida</label>'+'</div>';
                confirmPasswordRegsDiv.innerHTML = '<div class="usernameregs" id="confirmpassregsdiv"><label>Confirmar Password</label><input class="confirmpassregs" type="confimar password" placeholder="Password">'+'<label style="color: red; margin-top: 5px">Contraseña invalida</label>'+'</div>';
                incorrectPass = true;
            }


        }else {
            passwordRegsDiv.innerHTML = '<div class="usernameregs" id="passwordregsdiv"><label>Password</label><input class="passwordregs" type="password" placeholder="Password" value="'+passwordReg+'"></div>';
            confirmPasswordRegsDiv.innerHTML = '<div class="usernameregs" id="confirmpassregsdiv"><label>Confirmar Password</label><input class="confirmpassregs" type="confimar password" placeholder="Password"value=" '+ confirmPasswordReg+'"></div>';

            incorrectPass = false;
        }

        if (!nameRegIncorrect && !apellidoRegIncorrect && !emailIncorrect && !incorrectPass){
            var user = {
                name : nameReg,
                lastName : lastNameReg,
                email : emailReg,
                password : passwordReg
            };

            var userJSON = JSON.stringify(user);


            console.log(userJSON);
        }

    }
};



