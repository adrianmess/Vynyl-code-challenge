
describe("Flatten Array", function() {
  it("should test whether the nested array is converted to flat array", function() {
	const nestedArray = [["one", "two", ["three"]], "four"];

    function RecursiveFlat(nestedArray) {
      return nestedArray.reduce(
        (acc, val) =>
          Array.isArray(val) ? acc.concat(RecursiveFlat(val)) : acc.concat(val),
        []
      );
    }
    expect(RecursiveFlat(nestedArray)).toEqual(["one", "two", "three", "four"]);
  });
});


