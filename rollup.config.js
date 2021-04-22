import typescript from 'rollup-plugin-typescript2';

const config = [
  {
    input: "./src/lib.ts",
    output: [{ file: "lib/index-esm.js", format: "es" }],
    plugins: [typescript({ declarationDir: "./lib"})],
  },
  {
    input: "./src/lib.ts",
    output: [{ file: "lib/index-cjs.js", format: "cjs", exports: "named" }],
    plugins: [typescript()],
  }
];

export default config;
