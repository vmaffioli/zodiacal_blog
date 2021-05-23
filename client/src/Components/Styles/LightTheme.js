import { createGlobalStyle } from 'styled-components';

const LightTheme = createGlobalStyle`
    body {
        /* palette of colors */
        --BG1: var(--ROOT3);
        --BG2: var(--ROOT1);
        --T1: var(--ROOT2);
        --T2: var(--ROOT1);
        --P1: var(--ROOT6);
        --P2: var(--ROOT7);
        --E1: var(--ROOT1);
        --E2: var(--ROOT4);
  
}
`;

export default LightTheme;


