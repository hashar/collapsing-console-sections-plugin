const script = require("./script");

// See https://github.com/jsdom/jsdom/issues/2524
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("doToggle()", () => {

    it("is true", () => {
        expect(true).toBe(true);
    })
});
