/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-color-primary": "#fff",
        "link-primary": "#000",
        "base-base-black": "#0b0a0a",
        darkslategray: {
          "100": "#3d3d3d",
          "200": "#333",
          "300": "#232f3e",
          "400": "rgba(51, 51, 51, 0.09)",
          "500": "rgba(61, 61, 61, 0.09)",
        },
        "color-neutral-neutral-lightest": "#eee",
        "primary-primary": "#ff9900",
        chocolate: "#cc6600",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "rgba(230, 230, 230, 0.09)",
        },
        "base-base-white": "#fafafa",
      },
      spacing: {},
      fontFamily: {
        "aws-cd-bo-1-desktop-body-caption-regular": "'Amazon Ember'",
        "text-regular-semi-bold": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        "31xl": "50px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      "5xl": "24px",
      lgi: "19px",
      "9xl": "28px",
      "3xl": "22px",
      "37xl": "56px",
      "26xl": "45px",
      "15xl": "34px",
      "21xl": "40px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
