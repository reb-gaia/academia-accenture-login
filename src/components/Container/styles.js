// estilização do componente Container
import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

const ContainerSM = styled.div`
  margin: 80px 0;
  width: 700px;
  height: 100%;
  background-color:${mixins.colors.secondary};
  display: flex;
  flex-direction: column;
  align-self: center;
  border-radius: 25px;
  align-items: top;
  justify-content: center;
  padding: 50px;
`

export const Styled = {
  ContainerSM,
  ContainerLG: styled(ContainerSM)` /* estende informações de SM */
    margin: 5% 0;
    width: 90%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: none;
  `,
  Title: styled.h1`
    margin: 50px 0;
    align-self: center;
    color: ${mixins.colors.primary};
    font-family: ${mixins.fonts.bold};
    font-size: ${mixins.typograph.title};
  `
}