// ? OGGETTI STUDENTI

/* Descrizione:
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti(ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.

    BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente! */


// ! PUNTO 1

const student = {
    nome: 'Aleandro',
    cognome: 'Basilico',
    età: 19,
}


// ! PUNTO 2



for (let key in student) {
    console.log(key);
}

// ! PUNTO 3

const students = [
    { nome: 'Matteo', cognome: 'Bianchi', età: '22' },
    { nome: 'Francesco', cognome: 'Rossi', età: '30' },
    { nome: 'Davide', cognome: 'Verdi', età: '27' },
]

// ! PUNTO 4

for (let j = 0; j < students.length; j++) {
    const currentStudent = students[j];
    console.log(currentStudent.nome);
    console.log(currentStudent.cognome);
}


// ! PUNTO 5

const AddStudentName = prompt('Inserisci il nome');
const AddStudentSurname = prompt('Inserisci il cognome');
const AddStudentAge = prompt('Inserisci età');

const AddStudent = { nome: AddStudentName, cognome: AddStudentSurname, eta: AddStudentAge };
students.push(AddStudent);
console.log(students);
