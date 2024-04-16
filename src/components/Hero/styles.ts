import styled from 'styled-components'
import { Props } from '.'

const HeroForm = styled.form<Props>`
  height: 360px;
  width: 100%;
  background-image: url(${({ background }) => background});
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.corPrincipal};
    content: '';
    opacity: 0.7;
  }

  div {
    position: relative;
    color: #eee;
  }

  h2 {
    font-family: Gloock, serif;
    font-size: 48px;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;

    h2 {
      font-size: 32px;
    }
  }
`
export default HeroForm
