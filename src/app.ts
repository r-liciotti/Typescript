import { Partecipante, Corso, Azienda } from "./classi";



// Istanziazione degli oggetti Partecipante
const partecipante1 = new Partecipante("Ali", "Khan", "Pakistan", "Laurea", ["Inglese", "Italiano"], "Falegnameria");
const partecipante2 = new Partecipante("Maria", "Gonzalez", "Messico", "Diploma", ["Spagnolo", "Italiano"], "Sartoria");

// Istanziazione degli oggetti Corso
const corsoFalegnameria = new Corso("Corso di Falegnameria", "Imparare l'arte della falegnameria", "Artigianato", "6 mesi");
const corsoSartoria = new Corso("Corso di Sartoria", "Imparare l'arte della sartoria", "Artigianato", "6 mesi");

// Partecipanti si iscrivono ai corsi
partecipante1.iscrivitiCorso(corsoFalegnameria);
partecipante2.iscrivitiCorso(corsoSartoria);

partecipante1.terminaCorso(corsoFalegnameria);

// Istanziazione degli oggetti Azienda
const azienda1 = new Azienda("Falegnameria Rossi", "Artigianato", "Azienda specializzata in falegnameria tradizionale", ["Falegname", "Apprendista falegname"]);
const azienda2 = new Azienda("Sartoria Bianchi", "Moda", "Azienda specializzata in sartoria di alta moda", ["Sarto", "Apprendista sarto"]);

// Aziende offrono posizioni lavorative
azienda1.offriPosizione(partecipante1, "Apprendista falegname");
azienda2.offriPosizione(partecipante2, "Sarto");

azienda1.elencaPosizioniAperte();
azienda2.elencaPosizioniAperte();

