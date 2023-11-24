"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmprestimoAutomovel = void 0;
var Emprestimo_1 = require("./Emprestimo");
var EmprestimoAutomovel = /** @class */ (function (_super) {
    __extends(EmprestimoAutomovel, _super);
    function EmprestimoAutomovel(nomeSolicitante, idadeSolicitante, valorTotal, numParcelas, valorParcela, rendaMensal, possuiHabilitacao) {
        var _this = _super.call(this, nomeSolicitante, idadeSolicitante, valorTotal, numParcelas, valorParcela, rendaMensal) || this;
        _this.possuiHabilitacao = possuiHabilitacao;
        return _this;
    }
    EmprestimoAutomovel.prototype.verificaAprovacao = function () {
        return this.idadeSolicitante >= 18 && this.rendaMensal > 3000 && this.possuiHabilitacao;
    };
    return EmprestimoAutomovel;
}(Emprestimo_1.Emprestimo));
exports.EmprestimoAutomovel = EmprestimoAutomovel;
