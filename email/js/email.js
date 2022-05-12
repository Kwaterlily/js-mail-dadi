// Mail
// crea un arrey  
const listaEmail = ["nomecognome.azienda@gmail.com", "nomeazienda@info.com", "nomecognome@gmail.com", "tiziocaio@gmail.com", "indirizzomail@gmail.com", "nome.secondonomecognome@gmail.com", "nomeazienda@staff.com"];

// Chiedi all’utente la sua email,
const eMailInserita =  prompt('Inserisci la tua email')
// controlla che sia nella lista di chi può accedere
let mail = false;
for (var i = 0 ; i < listaEmail.length; i++) {
    var lista = listaEmail[i];
    if(lista == eMailInserita){
        mail = true;
        document.getElementById('lista_email').innerHTML = "L'email inserita é: " + eMailInserita;

    }else {
        document.getElementById('lista_email').innerHTML = "L'email inserita é: " + eMailInserita;
    }
    
} 
// stampa un messaggio appropriato sull’esito del controllo.
if (mail == true) {
    document.getElementById('lista_email').innerHTML = eMailInserita + ` Email presente nella lista`;
}else {
    document.getElementById('lista_email').innerHTML = eMailInserita + ` Email non presente nella lista`;
}



