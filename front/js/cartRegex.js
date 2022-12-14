//************************************** */
//************* partie Regex *********** */
//********** de la page panier ********* */
//************************************** */


export {checkForm}

//controle de conformité des données du formulaire
function checkForm(error) {
    const regex = /^[a-z A-Z çéèà]{3,20}$/
    const regexAddress = /^[a-z A-Z 0-9 çéèà_,'-]{3,150}$/
    const regexEmail = /^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9._-]+[.]{1}[a-z]{2,4}$/

    if (!regex.test(document.getElementById("firstName").value)) {
        document.getElementById('firstNameErrorMsg').textContent = "Prénom invalide";
        error.push("Prénom")
    }else{
        document.getElementById('firstNameErrorMsg').textContent = "";
    }
    if (!regex.test(document.getElementById('lastName').value)) {
        document.getElementById('lastNameErrorMsg').textContent = "Nom invalide";
        error.push("Nom")
    }else{
        document.getElementById('lastNameErrorMsg').textContent = "";
    }
    if (!regexAddress.test(document.getElementById('address').value)) {
        document.getElementById('addressErrorMsg').textContent = "Adresse invalide";
        error.push("Adresse")
    }else{
        document.getElementById('addressErrorMsg').textContent = "";
    }

    if (!regexAddress.test(document.getElementById('city').value)) {
        document.getElementById('cityErrorMsg').textContent = "Ville invalide";
        error.push("Ville")
    }else{
        document.getElementById('cityErrorMsg').textContent = "";
    }
    if (!regexEmail.test(document.getElementById("email").value)) {
        document.getElementById('emailErrorMsg').textContent = "Email invalide";
        error.push("email")
    }else{
        document.getElementById('emailErrorMsg').textContent = "";
    }
}
