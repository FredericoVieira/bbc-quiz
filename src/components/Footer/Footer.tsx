import * as S from './Footer.styles'

export function Footer() {
  return (
    <S.Footer>
      <S.Note>
        © {new Date().getFullYear()} -{' '}
        <S.Link href="https://www.bb.com.br/consorcios" target="_blank">
          BB Consórcios
        </S.Link>
      </S.Note>
    </S.Footer>
  )
}
