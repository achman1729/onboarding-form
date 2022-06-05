import { getByText } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";
import { calculateSuper as getSuper, calculateTax as getTax } from "./utility.js";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

let dom;
let container;

describe("index.html", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    container = dom.window.document.body;
  });

  it("calculates tax and super of salary $15,000 correctly", () => {
    const annualSalary = 15000;
    expect(getTax(annualSalary)).toBe("0");
    expect(getSuper(annualSalary)).toBe(1500);
  });

  it("calculates tax and super of salary $30,000 correctly", () => {
    const annualSalary = 30000;
    expect(getTax(annualSalary)).toBe("2242");
    expect(getSuper(annualSalary)).toBe(3000);
  });

  it("calculates tax and super of salary $60,000 correctly", () => {
    const annualSalary = 60000;
    expect(getTax(annualSalary)).toBe("11047");
    expect(getSuper(annualSalary)).toBe(6000);
  });

  it("calculates tax and super of salary $150,000 correctly", () => {
    const annualSalary = 150000;
    expect(getTax(annualSalary)).toBe("42997");
    expect(getSuper(annualSalary)).toBe(15000);
  });

  it("calculates tax and super of salary $200,000 correctly", () => {
    const annualSalary = 200000;
    expect(getTax(annualSalary)).toBe("63097");
    expect(getSuper(annualSalary)).toBe(20000);
  });
});
