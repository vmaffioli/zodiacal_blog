import { createGlobalStyle } from 'styled-components';

const DarkTheme = createGlobalStyle`
    body {
        /* palette of colors */
        --BG1: var(--ROOT6);
        --BG2: var(--ROOT7);
        --T1: var(--ROOT1);
        --T2: var(--ROOT4);
        --P1: var(--ROOT3);
        --P2: var(--ROOT5);
        --E1: var(--ROOT1);
        --E2: var(--ROOT4);
  
}
`;

export default DarkTheme;


