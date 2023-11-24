import { Emprestimo } from "../Emprestimos/Emprestimo";

export class SolicitacaoEmprestimo {
    private static emprestimos: Emprestimo[] = [];

    static add(emprestimo: Emprestimo): void {
        this.emprestimos.push(emprestimo);
    }

    static processarSolicitacoes(): void {
        for (const emprestimo of this.emprestimos) {
            const status = emprestimo.verificaAprovacao() ? "APROVADO" : "REPROVADO";
            console.log(`${emprestimo.getNomeSolicitante()} [${status}]`);
        }
    }
}
