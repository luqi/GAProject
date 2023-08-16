import { render, screen } from '@testing-library/react'

import App from './index'

test('render the home page', () => {
  render(<App />)

  expect(screen.getByText('Welcome to My Website')).toBeInTheDocument()
})