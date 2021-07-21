// estilização da página Login

import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Styled = {
  Error: styled.p`
    margin-top: 4px;
    align-self: center;
    justify-self: center;
    color: ${mixins.colors.red};
    font-family: ${mixins.fonts.semi_bold};
    font-size: ${mixins.typograph.paragraph};
  `
}