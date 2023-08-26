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
  it("Sea Cantidad 5, Precio 2, Estado CA deberia retornar 0.0825", () => {
    const sp = new SellPoint('CA', 5,2)
    expect(sp.getVerificarImpuesto(0.825)).toEqual(true);
  });
});


describe("SellPoint", () => {
  it("Sea Cantidad 20, Precio 100, Estado TX deberia retornar 125", () => {
    const sp = new SellPoint('TX', 20, 100)
    expect(sp.getVerificarImpuesto(125)).toEqual(true);
  });
})

describe("SellPoint", () => {
  it("Sea Cantidad 31, Precio 0.5, Estado AL deberia retornar 0.62", () => {
    const sp = new SellPoint('AL', 31, 0.5)
    expect(sp.getVerificarImpuesto(0.62)).toEqual(true);
  });
})

describe("SellPoint", () => {
  it("Sea Cantidad 8, Precio 5, Estado NV deberia retornar 3.2", () => {
    const sp = new SellPoint('NV', 8, 5)
    expect(sp.getVerificarImpuesto(3.2)).toEqual(true);
  });
})

describe("SellPoint", () => {
  it("Sea Cantidad 11, Precio 3.5, Estado UT deberia retornar 2.56", () => {
    const sp = new SellPoint('UT', 11, 3.5)
    expect(sp.getVerificarImpuesto(2.56025)).toEqual(true);
  });
})

describe("SellPoint", () => {
  it("Sea Cantidad 11, Precio 3.5, deberia retornar el descuento 0", () => {
    const sp = new SellPoint('UT', 11, 3.5)
    expect(sp.getVerificarDescuento(0)).toEqual(true);
  });
})


describe("SellPoint", () => {
  it("Sea Cantidad 1000, Precio 3.5, deberia retornar el descuento 105", () => {
    const sp = new SellPoint('UT', 1000, 3.5)
    expect(sp.getVerificarDescuento(105)).toEqual(true);
  });
})