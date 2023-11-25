import { Box, Text } from '@chakra-ui/react'
import { FormularioComponente } from "./Componentes/FormularioComponente"


export const HooksFormulario = () => {
    return (
        <>
            <Box m="40px" textAlign="center" fontFamily="serif" fontSize="50px">
                <Text
                    bgGradient='linear(to-t, blue.200, teal.500)'
                    bgClip='text'
                    fontSize='6xl'
                    fontWeight='extrabold'
                >
                    Formulario
                </Text>
                <hr />
            </Box>

            <FormularioComponente></FormularioComponente>
        </>

    )
}
