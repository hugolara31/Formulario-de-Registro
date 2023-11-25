import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { HooksFormulario } from './HooksFormulario.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <HooksFormulario />
    </ChakraProvider>
  </React.StrictMode>,
)
