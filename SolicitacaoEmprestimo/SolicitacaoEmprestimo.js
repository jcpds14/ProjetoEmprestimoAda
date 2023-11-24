"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitacaoEmprestimo = void 0;
var SolicitacaoEmprestimo = /** @class */ (function () {
    function SolicitacaoEmprestimo() {
    }
    SolicitacaoEmprestimo.add = function (emprestimo) {
        this.emprestimos.push(emprestimo);
    };
    SolicitacaoEmprestimo.processarSolicitacoes = function () {
        for (var _i = 0, _a = this.emprestimos; _i < _a.length; _i++) {
            var emprestimo = _a[_i];
            var status_1 = emprestimo.verificaAprovacao() ? "APROVADO" : "REPROVADO";
            console.log("".concat(emprestimo.getNomeSolicitante(), " [").concat(status_1, "]"));
        }
    };
    SolicitacaoEmprestimo.emprestimos = [];
    return SolicitacaoEmprestimo;
}());
exports.SolicitacaoEmprestimo = SolicitacaoEmprestimo;
