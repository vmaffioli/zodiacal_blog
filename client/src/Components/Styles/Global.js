import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    body {
      /* palette of colors */
      --ROOT1: rgba(42,176,189,1);
      --ROOT2: rgba(101,49,71,1);
      --ROOT3: rgba(252,251,227,1);
      --ROOT4: rgba(224,36,119,1);
      --ROOT5: rgba(237,231,213,1);
      --ROOT6: rgba(0,0,0,1);
      --ROOT7: rgba(45,45,45,1);
  
      /* general */
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
}
`;

export default Global;