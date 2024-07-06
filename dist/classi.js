"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partecipante = exports.Corso = exports.Azienda = void 0;
class Azienda {
    constructor(nomeAzienda, settoreAttivita, descrizione, posizioniAperte) {
        this.nomeAzienda = nomeAzienda;
        this.settoreAttivita = settoreAttivita;
        this.descrizione = descrizione;
        this.posizioniAperte = posizioniAperte;
    }
    elencaPosizioniAperte() {
        console.log(`${this.nomeAzienda} ha ${this.posizioniAperte.length} Posizioni Aperte: `);
        this.posizioniAperte.forEach(el => {
            console.log(`${el}`);
        });
    }
    offriPosizione(partecipante, posizione) {
        if (this.posizioniAperte.includes(posizione)) {
            // Rimuovo la posizione aperta, creando/sovrascrivendo un nuovo array escludendo la posizione
            this.posizioniAperte = this.posizioniAperte.filter(el => el !== posizione);
            console.log(`Azienda ${this.nomeAzienda} offre la posizione di ${posizione} a ${partecipante.nome} ${partecipante.cognome}.`);
            return;
        }
        console.log(`Posizione ${posizione} non trovata!.`);
    }
    ;
}
exports.Azienda = Azienda;
class Corso {
    constructor(titolo, descrizione, settoreProfessionale, durata) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.settoreProfessionale = settoreProfessionale;
        this.durata = durata;
        this.elencoIscritti = [];
    }
    aggiungiPartecipante(partecipante) {
        this.elencoIscritti.push(partecipante);
        console.log(`Partecipante ${partecipante} inserito al Corso ${this.titolo}`);
        console.log(`--- Numero Iscritti al Corso ${this.titolo}: ${this.elencoIscritti.length}`);
    }
    rimuoviPartecipante(partecipante) {
        const index = this.elencoIscritti.indexOf(partecipante);
        if (index > 0) {
            this.elencoIscritti = this.elencoIscritti.filter(el => el !== partecipante);
            return;
        }
        console.log(`Il Partecipente: ${partecipante.toString} non fa parte del corso ${this.titolo}`);
    }
}
exports.Corso = Corso;
class Partecipante {
    constructor(nome, cognome, paeseOrigine, livelloIstruzione, competenzeLinguistiche, ambitoFormazioneInteresse) {
        this.nome = nome;
        this.cognome = cognome;
        this.paeseOrigine = paeseOrigine;
        this.livelloIstruzione = livelloIstruzione;
        this.competenzeLinguistiche = competenzeLinguistiche;
        this.ambitoFormazioneInteresse = ambitoFormazioneInteresse;
    }
    toString() {
        return `${this.nome} ${this.cognome}`;
    }
    iscrivitiCorso(corso) {
        corso.aggiungiPartecipante(this);
    }
    terminaCorso(corso) {
        corso.rimuoviPartecipante(this);
    }
}
exports.Partecipante = Partecipante;
