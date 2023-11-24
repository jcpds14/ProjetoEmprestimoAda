import { Emprestimo } from "./Emprestimo";

export class EmprestimoAutomovel extends Emprestimo {
    private possuiHabilitacao: boolean;

    constructor(
        nomeSolicitante: string,
        idadeSolicitante: number,
        valorTotal: number,
        numParcelas: number,
        valorParcela: number,
        rendaMensal: number,
        possuiHabilitacao: boolean
    ) {
        super(nomeSolicitante, idadeSolicitante, valorTotal, numParcelas, valorParcela, rendaMensal);
        this.possuiHabilitacao = possuiHabilitacao;
    }

    verificaAprovacao(): boolean {
        return this.idadeSolicitante >= 18 && this.rendaMensal > 3000 && this.possuiHabilitacao;
    }
}
