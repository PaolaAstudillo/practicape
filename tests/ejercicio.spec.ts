import 'mocha';
import {expect} from 'chai';
import {add} from "../src/ejercicio";

describe("add function tests", () => {
  it("add(1, 8) returns value 9", () => {
    expect(add(1, 8)).to.be.equal(9);
  });

  it("add(-1, 8) returns value 7", () => {
    expect(add(-1, 8)).to.be.equal(7);
  });

  it("add(7, 8) returns value 15", () => {
    expect(add(7, 8)).to.be.equal(15);
  });
});