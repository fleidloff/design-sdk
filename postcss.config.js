const plugins = [
  [
    "postcss-preset-env",
    {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    },
  ],
  "postcss-import",
  "postcss-nested",
  ["postcss-custom-properties", { exportTo: "styles/custom-properties.json" }],
];
module.exports = {
  plugins: process.env.NODE_ENV === "production" ? [...plugins] : [...plugins],
};
