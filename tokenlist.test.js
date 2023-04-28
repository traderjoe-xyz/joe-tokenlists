describe("Token list should be a valid JSON", () => {
  it("can parse", () => {
    expect(
      JSON.parse(require("fs").readFileSync("./mc.tokenlist.json", "utf8"))
    ).toBeTruthy();
  });
});
