import { Emprestimo } from "./Emprestimo";

export class EmprestimoEstudantil extends Emprestimo {
    private matriculadoEnsinoSuperior: boolean;

    constructor(
        nomeSolicitante: string,
        idadeSolicitante: number,
        valorTotal: number,
        numParcelas: number,
        valorParcela: number,
        rendaMensal: number,
        matriculadoEnsinoSuperior: boolean
    ) {
        super(nomeSolicitante, idadeSolicitante, valorTotal, numParcelas, valorParcela, rendaMensal);
        this.matriculadoEnsinoSuperior = matriculadoEnsinoSuperior;
    }

    verificaAprovacao(): boolean {
        return this.idadeSolicitante >= 18 && this.idadeSolicitante <= 30 &&
            this.rendaMensal > 1500 && this.matriculadoEnsinoSuperior;
    }
}
