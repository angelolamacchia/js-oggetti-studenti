/* - Creare un oggetto che descriva uno studente con le
seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso il for in tutte le proprietà.*/
$(document).ready(function(){

    var student ={
        "nome": "Pippo",
        "cognome": "Baudo",
        "età": 80,
    };
    
    for (var key in student) {
        console.log(key + ": " + student[key]);
    }

/*- Creare un array di oggetti di studenti. Ciclare su tutti gli
studenti e stampare per ognuno nome e cognome*/
    var students = [
        {
            "nome": "Aldo",
            "cognome": "Baglio",
            "età": 40,
        },
        {
            "nome": "Giovanni",
            "cognome": "Storti",
            "età": 50,
        },
        {
            "nome": "Giacomo",
            "cognome": "Poretti",
            "età": 60,
        },
    ];

    for (var key in students) {
        console.log(students[key].nome + " " + students[key].cognome);
    }

/*- Dare la possibilità all’utente attraverso 3 prompt di
aggiungere un nuovo oggetto studente inserendo
nell’ordine: nome, cognome e età. */
    var newName = prompt("Inserire nome");
    //il nome/cognome inserito avrà solo la prima lettera maiuscola
    newName = newName.charAt(0).toUpperCase() + newName.slice(1).toLowerCase();

    var newSurname = prompt("Inserire cognome");
    newSurname = newSurname.charAt(0).toUpperCase() + newSurname.slice(1).toLowerCase();

    var newAge = parseInt(prompt("Inserire età"));

    //oggetto nuovo studente
    var newStudent = {
        "nome": newName,
        "cognome": newSurname,
        "età": newAge,
    };

    //inserisco il nuovo studente nell'array studenti
    students.push(newStudent);

    // for (var key in students) {
    //     console.log(students[key]);
    // }
    
    console.log(students[3].nome + " " + students[3].cognome);
      
});