import Confetti from 'react-confetti'
import { useSearchParams } from 'react-router-dom'
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'

import * as S from './Result.styles'

import resultFree from '~/assets/result-free.jpeg'
import resultOrganized from '~/assets/result-organized.jpeg'
import result from '~/data/result.json'
import { useWindowSize } from '~/hooks'

type ImageMapper = {
  [key: string]: string
}

const imageMapper: ImageMapper = {
  free: resultFree,
  organized: resultOrganized,
}

export function Result() {
  const { width, height } = useWindowSize()
  const [searchParams] = useSearchParams()
  const profileScore = searchParams.get('profile-score')

  const results = result as Record<string, string>
  const profile = Number(profileScore) >= 3 ? 'organized' : 'free'

  const currentUrl = window.location.href
  const translatedProfile = profile === 'organized' ? 'Organizado' : 'Livre'
  const title = `O meu perfil no quiz da BB Consórcios é: ${translatedProfile}! Veja mais em:`

  return (
    <>
      <Confetti
        height={height}
        width={width}
        recycle={false}
        numberOfPieces={1000}
        tweenDuration={10000}
      />
      <S.ResultImage src={imageMapper[profile]} />
      <S.ResultMessage>{results[profile]}</S.ResultMessage>
      <S.ButtonWrapper>
        <S.RestartQuizButton to="/">Reiniciar</S.RestartQuizButton>
        <S.ButtonGroup>
          <WhatsappShareButton
            windowWidth={1200}
            windowHeight={800}
            url={currentUrl}
            title={title}
          >
            <WhatsappIcon />
          </WhatsappShareButton>
          <TelegramShareButton url={currentUrl} title={title}>
            <TelegramIcon />
          </TelegramShareButton>
          <FacebookShareButton url={currentUrl}>
            <FacebookIcon />
          </FacebookShareButton>
          <LinkedinShareButton url={currentUrl} title={title}>
            <LinkedinIcon />
          </LinkedinShareButton>
        </S.ButtonGroup>
      </S.ButtonWrapper>
    </>
  )
}
