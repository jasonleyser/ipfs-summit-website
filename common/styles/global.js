import * as Constants from "~/common/constants";

import { injectGlobal } from "react-emotion";

/* prettier-ignore */
export default () => injectGlobal`
  @font-face {
    font-family: 'mono';
    src: url('/static/SFMono-Medium.woff');
  }

  @font-face {
    font-family: 'inter-regular';
    src: url('/static/Inter-Regular.woff');
  }

  @font-face {
    font-family: 'inter-semi-bold';
    src: url('/static/Inter-SemiBold.woff');
  }

  @font-face {
    font-family: 'inter-medium';
    src: url('/static/Inter-Medium.woff');
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html, body {
  background-color: ${Constants.colors.darkTeal};
  color: ${Constants.colors.gray};

  font-size: 16px;
  font-family: 'inter-regular', -apple-system, BlinkMacSystemFont, arial, sans-serif;

  @media (max-width: 1440px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  ::-webkit-scrollbar {
    display: none;
  }

`;
