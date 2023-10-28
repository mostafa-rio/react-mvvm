import React from 'react'
import App from '../src/app'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('App', () => {
  it('renders component', async () => {
    render(<App />)
    expect(await screen.findByRole('img')).toBeInTheDocument()
    expect(await screen.findByText('Click Here')).toBeInTheDocument()
  })
})
