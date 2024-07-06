export interface IPartecipante {
    nome: string;
    cognome: string;
    paeseOrigine: string;
    livelloIstruzione: string;
    competenzeLinguistiche: string[];
    ambitoFormazioneInteresse: string;

    toString(): string;
    iscrivitiCorso(corso: ICorso): void;
}

export interface ICorso {
    titolo: string;
    descrizione: string;
    settoreProfessionale: string;
    durata: string;
    elencoIscritti: IPartecipante[];

    aggiungiPartecipante(partecipante: IPartecipante): void;
    rimuoviPartecipante(partecipante: IPartecipante): void;
}

export interface IAzienda {
    nomeAzienda: string;
    settoreAttivita: string;
    descrizione: string;
    posizioniAperte: string[];

    elencaPosizioniAperte(): void;
    offriPosizione(partecipante: IPartecipante, posizione: string): void;
}



