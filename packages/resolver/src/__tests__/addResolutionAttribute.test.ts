import * as Types from "@code-dependency/interfaces";
import * as path from "path";
import { addResolutionAttribute } from "../addResolutionAttribute";

describe("#resolve", () => {
  const option: Types.ResolveOption = {
    symlinks: false,
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  };
  const baseDir = path.resolve(__dirname, "../../");
  test("addResolutionAttributes", () => {
    const resolver = addResolutionAttribute({ baseDir }, "../addResolutionAttributes.ts", option);

    const result1 = resolver({ moduleName: "@code-dependency/interfaces", moduleSystem: "cjs" });
    expect(result1.resolved).toBe("../interfaces/lib/index.js");

    const result2 = resolver({ moduleName: "path", moduleSystem: "cjs" });
    expect(result2.resolved).toBe("path");
  });
});
