class Example {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

describe("general js test", () => {
  it("toEqual", () => {
    const A = [0, 1];
    const B = [0, 1];

    expect(A).toEqual(B);
    expect(A).toStrictEqual(B);

    A[0] = 2;
    B[0] = 2;
    expect(A).toEqual(B);
    expect(A).toStrictEqual(B);

    expect(A).toBe(A);
  });

  it("filter", () => {
    const A = [new Example("A", 1), new Example("B", 2)];
    const B = A.filter((obj) => obj.age > 0);

    expect(A).toEqual(B);
    expect(A).toStrictEqual(B);
    // expect(A).toBe(B);
    A[0].name = "C";
    expect(A).toEqual(B);
    expect(A).toStrictEqual(B);
    expect(A[0].name).toEqual("C");
    expect(B[0].name).toEqual("C");
  });
});
