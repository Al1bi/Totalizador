import SellPoint from "./sellpoint";
describe("SellPoint", () => {
    it("deberia devolver la entrada de usuario", () => {
        const sp = new SellPoint('TX', 1,1)
        expect(sp.getPrecioNeto()).toEqual(1);
    });
  });
describe("SellPoint", () => {
    it("deberia devolver la entrada de usuario", () => {
        const sp = new SellPoint('TX', 2,1)
        expect(sp.getPrecioNeto()).toEqual(2);

    });
  });

describe("SellPoint", () => {
    it("Sea Cantidad 5, Precio 2, Estad CA deberia retornar 0.0825", () => {
        const sp = new SellPoint('CA', 5,2)
        expect(sp.getVerificarImpuesto(0.825)).toEqual(true);

    });
  });