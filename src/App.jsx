import { useState } from 'react'
import Container from './Components/Container'
import { LoadingContextProvider } from './Context/LoadingContext'
import { PageStepContextProvider } from './Context/PageStepContext'
import { SelectedSwatchContextProvider } from './Context/SelectedSwatchContext'
import { SelectedModelContextProvider } from './Context/SelectedModelContext'

function App() {
  return (
    <>
      <LoadingContextProvider>
        <PageStepContextProvider>
          <SelectedSwatchContextProvider>
            <SelectedModelContextProvider>
              <Container />
            </SelectedModelContextProvider>
          </SelectedSwatchContextProvider>
        </PageStepContextProvider>
      </LoadingContextProvider>
    </>
  )
}

export default App
