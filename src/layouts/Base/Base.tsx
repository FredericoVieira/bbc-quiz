import { Outlet, ScrollRestoration } from 'react-router-dom'

import { Footer } from '~/components/Footer'
import { HeaderBar } from '~/components/HeaderBar'

import * as S from './Base.styles'

export function Base() {
  return (
    <>
      <HeaderBar />
      <S.Page>
        <Outlet />
      </S.Page>
      <Footer />
      <ScrollRestoration />
    </>
  )
}
