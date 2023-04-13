import { init } from "@/app";

beforeAll(async () => {
  await init();
});

describe("Testing", () => {
  it("if tests", () => {
    const x = 1;

    expect(x).toBe(1);
  });
});
