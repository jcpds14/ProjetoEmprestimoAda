import { Emprestimo } from "./Emprestimo";

export class EmprestimoPessoal extends Emprestimo {
    verificaAprovacao(): boolean {
        return this.idadeSolicitante >= 18 && this.rendaMensal > 2500;
    }
}
