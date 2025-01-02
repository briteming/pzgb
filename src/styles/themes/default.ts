import { css } from "styled-components";

export const defaultTheme = {
  colors: {
    blue: "#3294F8",
    "base-title": "#E7EDF4",
    "base-subtitle": "#C4D4E3",
    "base-text": "#AFC2D4",
    "base-span": "#7B96B2",
    "base-label": "#3A536B",
    "base-border": "#1C2F41",
    "base-post": "#112131",
    "base-profile": "0B1B2B",
    "base-background": "#071422",
    "base-input": "#040F1A",
  },
  fonts: {
    textXS: css`
      font-family: "Nunito", serif;
      font-size: 0.75rem;
      line-height: 160%;
      font-weight: 400;
    `,
    textS: css`
      font-family: "Nunito", serif;
      font-size: 0.875rem;
      line-height: 160%;
      font-weight: 400;
    `,
    textM: css`
      font-family: "Nunito", serif;
      font-size: 1rem;
      line-height: 160%;
      font-weight: 400;
    `,
    textL: css`
      font-family: "Nunito", serif;
      font-size: 1.125rem;
      line-height: 160%;
      font-weight: 400;
    `,
    textXL: css`
      font-family: "Nunito", serif;
      font-size: 1.25rem;
      line-height: 160%;
      font-weight: 400;
    `,
    textXXL: css`
      font-family: "Nunito", serif;
      font-size: 1.5rem;
      line-height: 160%;
      font-weight: 400;
    `,
  },
};
