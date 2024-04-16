import { Container } from '../../global_style'
import HeroForm from './styles'

export type Props = {
  background: string
}

const Hero = () => (
  <HeroForm
    background={
      'https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg'
    }
  >
    <Container>
      <h2>As melhores vagas para tecnologia, design e artes visuais.</h2>
    </Container>
  </HeroForm>
)

export default Hero
