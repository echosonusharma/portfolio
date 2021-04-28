import React from "react";
import { Box, Center, Flex, Text, HStack, Grid, Image, VStack, useMediaQuery } from "@chakra-ui/react";
//
import javascript from '../assets/javascript.svg';
import typescript from '../assets/typescript.svg';
import python from '../assets/python.svg';
import html5 from '../assets/html5.svg';
import css3 from '../assets/css3.svg';
import reactJS from '../assets/reactjs.svg';
import next from '../assets/nextjs.svg';
import tailwindCSS from '../assets/tailwindCSS.svg';
import chakraUI from '../assets/chakraUI.png';
import nodeJS from '../assets/nodejs.svg';
import expressJS from '../assets/express-js.png';
import PostgreSQL from '../assets/postgresql.svg';
import mongoDB from '../assets/mongodb.svg';
import linux from '../assets/linux.png';
import bash from '../assets/bash.svg';
import git from '../assets/git.png';
import vscode from '../assets/vscode.svg';




const ImageBox = ({ src, alt, name }) => {
    return (
        <VStack className='expand' >
            <Image
                boxSize={['35px', '40px']}
                objectFit="cover"
                src={src}
                alt={alt}
            />
            <Text
                fontSize={['0.7rem', '1rem']}
            >{name}</Text>
        </VStack>
    )
}



const Lang = () => {
    return (
        <>
            <ImageBox
                src={javascript}
                alt='Javascript'
                name='Javascript' />
            <ImageBox
                src={typescript}
                alt='Typescript'
                name='Typescript'
            />
            <ImageBox
                src={python}
                alt='Python'
                name='Python'
            />

        </>
    )
}


const FrontEnd = () => {
    return (
        <>
            <ImageBox
                src={html5}
                alt='HTML5'
                name='HTML5' />
            <ImageBox
                src={css3}
                alt='CSS3'
                name='CSS3'
            />
            <ImageBox
                src={reactJS}
                alt='ReactJS'
                name='ReactJS'
            />
            <ImageBox
                src={next}
                alt='NextJS'
                name='NextJS'
            />
            <ImageBox
                src={tailwindCSS}
                alt='TailwindCSS'
                name='TailwindCSS'
            />
            <ImageBox
                src={chakraUI}
                alt='ChakraUI'
                name='ChakraUI'
            />
        </>
    )
};


const BackEnd = () => {
    return (
        <>
            <ImageBox
                src={nodeJS}
                alt='NodeJS'
                name='NodeJS'
            />
            <ImageBox
                src={expressJS}
                alt='ExpressJS'
                name='ExpressJS'
            />
            <ImageBox
                src={PostgreSQL}
                alt='PostgreSQL'
                name='PostgreSQL'
            />
            <ImageBox
                src={mongoDB}
                alt='mongoDB'
                name='mongoDB'
            />

        </>
    )
};


const Tools = () => {
    return (
        <>
            <ImageBox
                src={linux}
                alt='Linux'
                name='Linux'
            />
            <ImageBox
                src={bash}
                alt='Bash'
                name='Bash'
            />
            <ImageBox
                src={git}
                alt='Git'
                name='Git'
            />
            <ImageBox
                src={vscode}
                alt='VScode'
                name='VScode'
            />

        </>
    )

}



const Skills = () => {
    const [lg] = useMediaQuery("(min-width: 1280px)");

    return (
        <>
            <Box py={['1rem', '3rem', '4rem']} >
                <Center
                    fontFamily='Monoton'
                    fontWeight="400"
                    fontSize={['4xl', '6xl']}
                    py={['1rem', '3rem', '5rem']}
                >SKILLS</Center>
                <Box fontFamily='Poppins' w={['80vw']} px={['10vw', '15vw', '20vw']}>
                    <HStack>
                        <Flex d="row" >

                            <Box py={['1rem', '2rem']} >
                                <Box>
                                    <Text fontSize={['1rem', '1.4rem', '1.6rem']} >Languages</Text>
                                    <Box w="4rem" h="0.2rem" bg="blue.200" borderRadius="2xl" mb="2rem" />
                                </Box>
                                <Box pl={['1rem', '2rem', '4rem']} py={['1rem', '1.5rem']} >
                                    {
                                        lg ?
                                            <HStack spacing='3rem'>
                                                <Lang />
                                            </HStack>
                                            :
                                            <Grid templateColumns="repeat(3, 1fr)" >
                                                <Lang />
                                            </Grid>
                                    }
                                </Box>
                            </Box>

                            <Box py={['1rem', '2rem']} >
                                <Box>
                                    <Text fontSize={['1rem', '1.4rem', '1.6rem']} >Front-End</Text>
                                    <Box w="4rem" h="0.2rem" bg="blue.200" borderRadius="2xl" mb="2rem" />
                                </Box>
                                <Box pl={['1rem', '2rem', '4rem']} py={['1rem', '1.5rem']}>
                                    {
                                        lg ?
                                            <HStack spacing='3rem'>
                                                <FrontEnd />
                                            </HStack>
                                            :
                                            <Grid templateColumns="repeat(4, 1fr)" rowGap='1.5rem' columnGap='2rem'>
                                                <FrontEnd />
                                            </Grid>
                                    }
                                </Box>
                            </Box>


                            <Box py={['1rem', '2rem']} >
                                <Box>
                                    <Text fontSize={['1rem', '1.4rem', '1.6rem']} >Back-End</Text>
                                    <Box w="4rem" h="0.2rem" bg="blue.200" borderRadius="2xl" mb="2rem" />
                                </Box>
                                <Box pl={['1rem', '2rem', '4rem']} py={['1rem', '1.5rem']}>
                                    {
                                        lg ?
                                            <HStack spacing='3rem'>
                                                <BackEnd />
                                            </HStack>
                                            :
                                            <Grid templateColumns="repeat(4, 1fr)" >
                                                <BackEnd />
                                            </Grid>
                                    }
                                </Box>
                            </Box>

                            <Box py={['1rem', '2rem']} >
                                <Box>
                                    <Text fontSize={['1rem', '1.4rem', '1.6rem']} >Tools</Text>
                                    <Box w="4rem" h="0.2rem" bg="blue.200" borderRadius="2xl" mb="2rem" />
                                </Box>
                                <Box pl={['1rem', '2rem', '4rem']} py={['1rem', '1.5rem']}>
                                    {
                                        lg ?
                                            <HStack spacing='3rem'>
                                                <Tools />
                                            </HStack>
                                            :
                                            <Grid templateColumns="repeat(4, 1fr)" >
                                                <Tools />
                                            </Grid>
                                    }
                                </Box>
                            </Box>

                        </Flex>
                    </HStack>
                </Box>
            </Box>
        </>
    )
};

export default Skills;