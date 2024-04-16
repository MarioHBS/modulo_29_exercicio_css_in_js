import styled from 'styled-components'

export default styled.header`
  color: ${(props) => props.theme.corPrincipal};
  background-color: ${({ theme }) => theme.corSecundaria};
  text-align: center;
  padding: 24px 0;
`
