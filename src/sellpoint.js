module.exports = class SellPoint{

    constructor(_estado, canti, preci){
        this.estado = _estado;
        this.cantidad = canti;
        this.precio = preci;
        this.impuesto = {"UT": 0.0665, "NV": 0.08, "TX": 0.0625, "AL": 0.04, "CA":  0.0825}; 
    }

    getPorcentaje(){
        return this.impuesto[this.estado];
    }
    getPrecioNeto()
    {
        return this.cantidad*this.precio;
    }

    getTotalImpuesto(){
        return this.getPrecioNeto() * this.getPorcentaje();
    }

    getVerificarImpuesto(esperado){
        const eps = 1e-9;
        if( Math.abs(this.getTotalImpuesto() - esperado)  < eps) return true;
        return false;    
    }

    getTotalAbsoluto(){
        return this.getTotalImpuesto() + this.getPrecioNeto();
    }

};