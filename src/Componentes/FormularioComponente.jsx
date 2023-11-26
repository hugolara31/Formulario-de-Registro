import {
    FormControl,
    FormLabel,
    Input,
    Box,
    FormHelperText,
    FormErrorMessage,
    Stack,
    InputLeftAddon,
    InputGroup,
    InputRightElement,
    Button,
    ButtonGroup,
    Text
} from "@chakra-ui/react"
import { useState } from "react"

export const FormularioComponente = () => {
   // const [nombre, setNombre]= useState('')
    //const [apellido, setApellido]= useState('')
    const [email, setEmail]= useState('')
    //const [password, setPassword]= useState('')
    //const [password2, setPassword2]= useState('')
    //const [telefono, setTelefono]= useState('')
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)

    //const handleNombreChange = (e) => setNombre(e.target.value)

//    const handleApellidoChange = (e) => setApellido(e.target.value)

  //  const handlePasswordChange = (e) => setPassword(e.target.value)
  
    //const handlePassword2Change = (e) => setPassword2(e.target.value)
   
    //const handleTelefonoChange = (e) => setTelefono(e.target.value)
  

    const handleEmailChange = (e) => setEmail(e.target.value)
    const isError = email === ''

    const handleClick = () => setShow(!show)
    const handleClick2 = () => setShow2(!show2)

        //const validarPassword2 = () => {
        //let pass = ("password").value
        //let pass2 = ("password2").value
        //if (pass.length != 0) {
            //if (pass == pass2) {
              //  Message.textContent = "Password confirmada";
            //}
            //else {
              //  Message.textContent = "Password no coincide"
            //} 
        //}
        //else {
          //  alert("los campos no pueden quedar vacios");
            //message.textContent = "";
      //  }
    //}



    const expresiones = { 
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        password: /^.{4,12}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ 
        }
    return (
        <Box 
        textAlign="center" 
        bgGradient= "linear-gradient(225deg, #97aaff 0, #1e7bf3 50%, #0053df 100%)"
        p="5%"
        border="1px solid gray"
        marginBottom="10%"
        marginRight="10%"
        marginLeft="10%"
        >
            <FormControl isRequired>
                <FormLabel m="5px">Nombre</FormLabel>
                <Input bg="white" m="5px" type="text" id="Nombre" placeholder='Ingresar Nombre' />
                <Text>Ingresa tu nombre</Text>
            </FormControl>
            <br />
            <FormControl isRequired>
                <FormLabel m="5px">Apellido</FormLabel>
                <Input bg="white" m="5px" type="text" id="Apellido" placeholder='Ingresar Apellido'  />
                <Text>Ingresa tu apellido</Text>
            </FormControl>
            <br />
            <FormControl isInvalid={isError}>
                <FormLabel m="5px">Email</FormLabel>
                <Input bg="white" m="5px" type='email' id="Email" value={email} onChange={handleEmailChange} placeholder="Correo Electronico" expresiones={expresiones.correo} />
                {!isError ? (
                    <FormHelperText>
                        Introduzca el correo electrónico en el que desea recibir informacion.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage m="1px">Requiere un Email Valido</FormErrorMessage>
                )}
            </FormControl>

            <Stack spacing={4}>
                <InputGroup >
                    <FormLabel m="5px" p="5px" >Telefono</FormLabel>
                    <InputLeftAddon m="5px" children='+54' />
                    <Input bg="white" m="5px" type='tel' id="Telefono" placeholder='Numero de Telefono'  />
                  
                </InputGroup>
            </Stack>
            <InputGroup size='md'>
            
                <Input
                    bg="white"
                    m="5px"
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                    //value={password}
                    //onChange={handlePasswordChange}
                    //expresiones={expresiones.password}
                />
                
                <InputRightElement width='4.5rem'>
                    <Button m="5px" h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
            <Text>Ingresa una contraseña que tenga de 4 a 12 caracteres</Text>
            <InputGroup size='md'>
            
                <Input
                bg="white"
                    m="5px"
                    pr='4.5rem'
                    type={show2 ? 'text' : 'password'}
                    placeholder='Confirm password'
                    //value={password2}
                    //onChange={handlePassword2Change}
                    //expresiones={expresiones.password}
                />
                <InputRightElement width='4.5rem'>
                    <Button m="5px" h='1.75rem' size='sm' onClick={handleClick2}>
                        {show2 ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
            <Text id="menssage" m="1px"></Text>
            
            <ButtonGroup variant='outline' spacing='6'>
                <Button p="5px" m="5px" bg="green" color="black" colorScheme='blue' value="submit" 
                //onClick={validarPassword2} 
                >enviar</Button>
                <Button p="5px" m="5px" border="1px solid gray" >cancelar</Button>
            </ButtonGroup>

        </Box>


    )
}
