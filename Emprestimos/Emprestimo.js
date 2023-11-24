"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emprestimo = void 0;
var Emprestimo = /** @class */ (function () {
    function Emprestimo(nomeSolicitante, idadeSolicitante, valorTotal, numParcelas, valorParcela, rendaMensal) {
        this.nomeSolicitante = nomeSolicitante;
        this.idadeSolicitante = idadeSolicitante;
        this.valorTotal = valorTotal;
        this.numParcelas = numParcelas;
        this.valorParcela = valorParcela;
        this.rendaMensal = rendaMensal;
    }
    Emprestimo.prototype.getNomeSolicitante = function () {
        return this.nomeSolicitante;
    };
    return Emprestimo;
}());
exports.Emprestimo = Emprestimo;
