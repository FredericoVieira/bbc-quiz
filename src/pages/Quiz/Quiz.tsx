import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './Quiz.styles'

import question1 from '~/assets/question-1.jpeg'
import question2 from '~/assets/question-2.jpeg'
import question3 from '~/assets/question-3.jpeg'
import question4 from '~/assets/question-4.jpeg'
import question5 from '~/assets/question-5.jpeg'
import quiz from '~/data/quiz.json'

type ImageMapper = {
  [key: string]: string
}

const imageMapper: ImageMapper = {
  'question-1': question1,
  'question-2': question2,
  'question-3': question3,
  'question-4': question4,
  'question-5': question5,
}

export function Quiz() {
  const navigate = useNavigate()

  const [currentStep, setCurrentStep] = useState(1)
  const [result, setResult] = useState(0)

  const {
    step,
    image = '',
    question,
    answers = [],
  } = quiz.find(({ step }) => step === currentStep) ?? {}

  const handleClick = (step: number | undefined, value: number) => {
    if (step) {
      setResult((previousResult) => previousResult + value)
      setCurrentStep(step + 1)

      const lastStep = quiz[quiz.length - 1].step

      if (step === lastStep) {
        navigate(`/result?profile-score=${result}`)
      }
    }
  }

  return (
    <>
      <S.QuizImage src={imageMapper[image]} />
      <S.QuizQuestion>{question}</S.QuizQuestion>
      {answers.map(({ id, text, value }) => (
        <S.QuizAnswer key={id} onClick={() => handleClick(step, value)}>
          {text}
        </S.QuizAnswer>
      ))}
    </>
  )
}
