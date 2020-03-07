import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap&subset=cyrillic');

  #root {
    position: relative;
    margin: 130px 0 40px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }

  html {
    font-size: 14px;
  }

  body {
    font-family: Roboto, Arial, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4em;
    min-width: 230px;
    max-width: 550px;
    margin: 0 auto;
    background: #f5f5f5;
    color: #4d4d4d;
  }

  p {
    line-height: 1;
  }

  strong {
    font-weight: 400;
  }

  a {
    color: inherit;
    margin: 0.21rem;
    border: 1px solid transparent;
    padding: 0.21rem 0.5rem;
    text-decoration: none;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-radius: 3px;
  }

  a:hover {
    border-color: rgba(255, 41, 5, 0.29);
  }

  button {
    margin: 0;
    border: 0;
    padding: 0;
    background: none;
    font-size: 100%;
    vertical-align: baseline;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    appearance: none;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .info {
    margin-top: 4.6rem;
    margin-right: auto;
    margin-bottom: 0;
    margin-left: auto;
    font-size: 0.75rem;
    color: #bfbfbf;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
    text-align: center;
  }
`
