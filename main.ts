import { EmprestimoPessoal } from "./Emprestimos/EmprestimoPessoal";
import { EmprestimoAutomovel } from "./Emprestimos/EmprestimoAutomovel";
import { EmprestimoEstudantil } from "./Emprestimos/EmprestimoEstudantil";
import { SolicitacaoEmprestimo } from "./SolicitacaoEmprestimo/SolicitacaoEmprestimo";

const emprestimoPessoal1 = new EmprestimoPessoal("João", 25, 5000, 12, 500, 3000);
const emprestimoPessoal2 = new EmprestimoPessoal("Maria", 30, 8000, 18, 400, 3500);
const emprestimoPessoal3 = new EmprestimoPessoal("Carlos", 22, 3000, 6, 600, 2000);

const emprestimoAutomovel1 = new EmprestimoAutomovel("Ana", 28, 20000, 24, 1000, 4000, true);
const emprestimoAutomovel2 = new EmprestimoAutomovel("Pedro", 35, 25000, 18, 1500, 3500, false);
const emprestimoAutomovel3 = new EmprestimoAutomovel("Mariana", 26, 15000, 12, 1200, 3000, true);

const emprestimoEstudantil1 = new EmprestimoEstudantil("Luana", 20, 8000, 24, 400, 1800, true);
const emprestimoEstudantil2 = new EmprestimoEstudantil("Rafael", 23, 10000, 36, 300, 2000, false);
const emprestimoEstudantil3 = new EmprestimoEstudantil("Sofia", 28, 12000, 12, 1000, 2500, true);

SolicitacaoEmprestimo.add(emprestimoPessoal1);
SolicitacaoEmprestimo.add(emprestimoPessoal2);
SolicitacaoEmprestimo.add(emprestimoPessoal3);
SolicitacaoEmprestimo.add(emprestimoAutomovel1);
SolicitacaoEmprestimo.add(emprestimoAutomovel2);
SolicitacaoEmprestimo.add(emprestimoAutomovel3);
SolicitacaoEmprestimo.add(emprestimoEstudantil1);
SolicitacaoEmprestimo.add(emprestimoEstudantil2);
SolicitacaoEmprestimo.add(emprestimoEstudantil3);

SolicitacaoEmprestimo.processarSolicitacoes();
