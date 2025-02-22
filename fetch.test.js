const { getEvents } = require("./fetch.js")

// getEvents tests

test("getEvents placeholder", () => {
    const input = "LiderB";
    const actual = getEvents(input);
    const expected = "LiderB";
    expect(actual).toEqual(expected);
});