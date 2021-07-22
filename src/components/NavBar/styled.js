// estilização do componente NavBar
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Styled = {
  NavBar: styled.nav`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100px;
    height: 100%;
    padding: 0px 10px;
    background-color: ${mixins.colors.primary}
  `,
  NavArea: styled.div`
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  `,
  NavItem: styled(Link)`
    background: none;
    border: none;
    outline: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    vertical-align: middle;
    color: #FFF;
    z-index: 1;
  `,
  NavButton: styled.button`
    background: none;
    border: none;
    outline: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    vertical-align: middle;
    color: #FFF;
    z-index: 1;
  `,
  Logo: styled.img`
    margin: 40px 0;
    width: 47px;
    height: 52px;
  `
}