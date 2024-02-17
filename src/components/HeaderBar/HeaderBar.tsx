import * as S from './HeaderBar.styles'

import logo from '~/assets/logo.png'

export function HeaderBar() {
  return (
    <S.HeaderBar>
      <S.LogoLink href="https://www.bb.com.br/consorcios" target="_blank">
        <S.Logo src={logo} />
      </S.LogoLink>
    </S.HeaderBar>
  )
}
