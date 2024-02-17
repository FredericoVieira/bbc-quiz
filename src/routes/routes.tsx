import { createBrowserRouter } from 'react-router-dom'

import { Base } from '~/layouts/Base'
import { Home } from '~/pages/Home'
import { Quiz } from '~/pages/Quiz'
import { Result } from '~/pages/Result'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Base />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'quiz',
        element: <Quiz />,
      },
      {
        path: 'result',
        element: <Result />,
      },
    ],
  },
])
