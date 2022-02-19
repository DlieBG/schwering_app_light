export interface Pins {
    pins: Ebene[];
}

export interface Ebene {
    ebene: string;
    raume: Raum[];
}

export interface Raum {
    name: string;
    schalter: Schalter[];
}

export interface Schalter {
    name: string;
    pin: number;
}
