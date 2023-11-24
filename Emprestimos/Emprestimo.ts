export abstract class Emprestimo {
    constructor(
        protected nomeSolicitante: string,
        protected idadeSolicitante: number,
        protected valorTotal: number,
        protected numParcelas: number,
        protected valorParcela: number,
        protected rendaMensal: number
    ) { }

    abstract verificaAprovacao(): boolean;

    getNomeSolicitante(): string {
        return this.nomeSolicitante;
    }
}
