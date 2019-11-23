import { listItem } from './lista-item.model';

export class List {

    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEnd: Date;
    terminada: boolean;
    items: listItem[];

    constructor(titulo: string) {
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.terminada = false;
        this.items = [];
        this.id = new Date().getTime();
    }
}