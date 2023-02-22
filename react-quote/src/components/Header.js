import { useMediaQuery, Stack, Button, Flex, Box, Text, Icon} from "@chakra-ui/react";
//import { useColorModePreference } from "@chakra-ui/react";
import { FaTwitter} from 'react-icons/fa';
import React from "react";
import { useState, useEffect } from "react";



function Header(){
    
    const [quotes, setQuotes] = useState("");

    const getQuote = () =>{
        fetch('https://type.fit/api/quotes')
            .then((res)=> res.json())
            .then((data)=> {
                let randomNum = Math.floor(Math.random() * data.length);
                setQuotes([data[randomNum].text, data[randomNum].author]);   
        });
    };

    useEffect(()=> {
        getQuote();
    }, [])

    const {isNotSmallerScreen} = useMediaQuery("(min-width:600px;)");
    return(
        <div>
            <Stack h={"100%"}>
                {/* <Circle position={"absolute"} bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"/> */}

                <Flex direction = { isNotSmallerScreen ? "row" : "column" } spacing="200px" p={ isNotSmallerScreen ? "32" : "0"} alignSelf = "flex-start" marginBottom={"5rem"} >
                    <Box mt= {isNotSmallerScreen ? "0" : 16} textAlign={"center"} >
                        <Text id = 'text'index= "0" margin = "2rem 0"lineHeight = "2.3rem" fontSize="3xl" height="auto" fontWeight = "bold" bgGradient="linear(to-r, cyan.400, blue.500,purple.600)" bgClip='text' > {quotes[0]} </Text>
                        <Text id='author' margin = "2rem 3rem" lineHeight = "1rem" fontSize="1xl" fontWeight = "semibold">{quotes[1]}</Text>
                        <Stack spacing={2} direction='row' align='center' justifyContent={"center"}>
                            <Button backgroundColor='red.500' _hover={{backgroundColor: 'red.600'}} color = 'white' 
                             onClick={ getQuote }
                             id="new-quote" >Another One!</Button>
                            <Button id="tweet-quote" as="a" href={`https://twitter.com/intent/tweet?text=${quotes[0]}–${quotes[1]}`} backgroundColor='cyan.500' _hover={{backgroundColor: 'cyan.300'}} color = 'white'>  <Icon as={FaTwitter} marginInlineEnd={"10px"}/>Tweet</Button>
                        </Stack>
                    </Box>



                </Flex>
            </Stack>


        </div>
    )
}

export default Header