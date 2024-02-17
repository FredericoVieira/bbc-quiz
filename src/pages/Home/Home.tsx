import * as S from './Home.styles'

import home from '~/assets/home.png'

export function Home() {
  return (
    <>
      <S.HomeImage src={home} alt="Home" />
      <S.StartQuizButton to="/quiz">Iniciar quiz</S.StartQuizButton>
    </>
  )
}
