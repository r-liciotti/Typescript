import { IPartecipante, ICorso, IAzienda } from "./interfacce";


export class Azienda implements IAzienda {
    public nomeAzienda: string;
    public settoreAttivita: string;
    public descrizione: string;
    public posizioniAperte: string[];


    constructor(
        nomeAzienda: string,
        settoreAttivita: string,
        descrizione: string,
        posizioniAperte: string[]
    ) {
        this.nomeAzienda = nomeAzienda;
        this.settoreAttivita = settoreAttivita;
        this.descrizione = descrizione;
        this.posizioniAperte = posizioniAperte;
    }

    elencaPosizioniAperte(): void {
        console.log(`${this.nomeAzienda} ha ${this.posizioniAperte.length} Posizioni Aperte: `);        
        this.posizioniAperte.forEach(el => {
            console.log(`${el}`);            
        });
    }

    offriPosizione(partecipante: IPartecipante, posizione: string): void {
        if (this.posizioniAperte.includes(posizione)) {
            // Rimuovo la posizione aperta, creando/sovrascrivendo un nuovo array escludendo la posizione
            this.posizioniAperte = this.posizioniAperte.filter(el => el !== posizione);
            console.log(
                `Azienda ${this.nomeAzienda} offre la posizione di ${posizione} a ${partecipante.nome} ${partecipante.cognome}.`
            );
            return;
        }
        console.log(`Posizione ${posizione} non trovata!.`);
        
    };
}

export class Corso implements ICorso{
    public titolo: string;
    public descrizione: string;
    public settoreProfessionale: string;
    public durata: string;
    public elencoIscritti: IPartecipante[];

    constructor(
        titolo: string,
        descrizione: string,
        settoreProfessionale: string,
        durata: string
    ) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.settoreProfessionale = settoreProfessionale;
        this.durata = durata;
        this.elencoIscritti = [];
    }

    aggiungiPartecipante(partecipante: IPartecipante): void {
        this.elencoIscritti.push(partecipante);
        console.log(`Partecipante ${partecipante} inserito al Corso ${this.titolo}`);
        console.log(`--- Numero Iscritti al Corso ${this.titolo}: ${this.elencoIscritti.length}`);        
    }

    rimuoviPartecipante(partecipante: IPartecipante): void{
        const index = this.elencoIscritti.indexOf(partecipante);
        if(index > 0){
            this.elencoIscritti = this.elencoIscritti.filter(el => el !== partecipante);
            return;
        }
        console.log(`Il Partecipente: ${partecipante.toString} non fa parte del corso ${this.titolo}`);
        
    }
}

export class Partecipante implements IPartecipante{
    public nome: string;
    public cognome: string;
    public paeseOrigine: string;
    public livelloIstruzione: string;
    public competenzeLinguistiche: string[];
    public ambitoFormazioneInteresse: string;

    constructor(
        nome: string,
        cognome: string,
        paeseOrigine: string,
        livelloIstruzione: string,
        competenzeLinguistiche: string[],
        ambitoFormazioneInteresse: string
    ) {
        this.nome = nome;
        this.cognome = cognome;
        this.paeseOrigine = paeseOrigine;
        this.livelloIstruzione = livelloIstruzione;
        this.competenzeLinguistiche = competenzeLinguistiche;
        this.ambitoFormazioneInteresse = ambitoFormazioneInteresse;
    }

    toString(): string {
        return `${this.nome} ${this.cognome}`;
    }

    iscrivitiCorso(corso: ICorso): void {
        corso.aggiungiPartecipante(this);
    }

    terminaCorso(corso: ICorso):void {
        corso.rimuoviPartecipante(this);
    }

}