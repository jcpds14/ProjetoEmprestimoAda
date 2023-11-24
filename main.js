"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmprestimoPessoal_1 = require("./Emprestimos/EmprestimoPessoal");
var EmprestimoAutomovel_1 = require("./Emprestimos/EmprestimoAutomovel");
var EmprestimoEstudantil_1 = require("./Emprestimos/EmprestimoEstudantil");
var SolicitacaoEmprestimo_1 = require("./SolicitacaoEmprestimo/SolicitacaoEmprestimo");
var emprestimoPessoal1 = new EmprestimoPessoal_1.EmprestimoPessoal("João", 25, 5000, 12, 500, 3000);
var emprestimoPessoal2 = new EmprestimoPessoal_1.EmprestimoPessoal("Maria", 30, 8000, 18, 400, 3500);
var emprestimoPessoal3 = new EmprestimoPessoal_1.EmprestimoPessoal("Carlos", 22, 3000, 6, 600, 2000);
var emprestimoAutomovel1 = new EmprestimoAutomovel_1.EmprestimoAutomovel("Ana", 28, 20000, 24, 1000, 4000, true);
var emprestimoAutomovel2 = new EmprestimoAutomovel_1.EmprestimoAutomovel("Pedro", 35, 25000, 18, 1500, 3500, false);
var emprestimoAutomovel3 = new EmprestimoAutomovel_1.EmprestimoAutomovel("Mariana", 26, 15000, 12, 1200, 3000, true);
var emprestimoEstudantil1 = new EmprestimoEstudantil_1.EmprestimoEstudantil("Luana", 20, 8000, 24, 400, 1800, true);
var emprestimoEstudantil2 = new EmprestimoEstudantil_1.EmprestimoEstudantil("Rafael", 23, 10000, 36, 300, 2000, false);
var emprestimoEstudantil3 = new EmprestimoEstudantil_1.EmprestimoEstudantil("Sofia", 28, 12000, 12, 1000, 2500, true);
SolicitacaoEmprestimo_1.SolicitacaoEmprestimo.add(emprestimoPessoal1);
SolicitacaoEmprestimo_1.SolicitacaoEmprestimo.add(emprestimoPessoal2);
SolicitacaoEmprestimo_1.SolicitacaoEmprestimo.add(emprestimoPessoal3);
SolicitacaoEmprestimo_1.SolicitacaoEmprestimo.add(emprestimoAutomovel1);
SolicitacaoEmprestimo_1.SolicitacaoEmprestimo.add(emprestimoAutomovel2);
SolicitacaoEmprestimo_1.SolicitacaoEmprestimo.add(emprestimoAutomovel3);
SolicitacaoEmprestimo_1.SolicitacaoEmprestimo.add(emprestimoEstudantil1);
SolicitacaoEmprestimo_1.SolicitacaoEmprestimo.add(emprestimoEstudantil2);
SolicitacaoEmprestimo_1.SolicitacaoEmprestimo.add(emprestimoEstudantil3);
SolicitacaoEmprestimo_1.SolicitacaoEmprestimo.processarSolicitacoes();
