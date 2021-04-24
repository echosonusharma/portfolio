import React from "react";
import { Box, Center, Flex, Text, HStack, Grid, Image, VStack, useMediaQuery } from "@chakra-ui/react";


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
                src='https://raw.githubusercontent.com/echosonusharma/static-assets/main/Icons/javascript.svg'
                alt='Javascript'
                name='Javascript' />
            <ImageBox
                src='https://raw.githubusercontent.com/echosonusharma/static-assets/main/Icons/typescript.svg'
                alt='Typescript'
                name='Typescript'
            />
            <ImageBox
                src='https://raw.githubusercontent.com/echosonusharma/static-assets/main/Icons/python.svg'
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
                src='https://raw.githubusercontent.com/echosonusharma/static-assets/main/Icons/html5.svg'
                alt='HTML5'
                name='HTML5' />
            <ImageBox
                src='https://raw.githubusercontent.com/echosonusharma/static-assets/main/Icons/css3.svg'
                alt='CSS3'
                name='CSS3'
            />
            <ImageBox
                src='https://raw.githubusercontent.com/echosonusharma/static-assets/main/Icons/reactjs.svg'
                alt='ReactJS'
                name='ReactJS'
            />
            <ImageBox
                src='https://raw.githubusercontent.com/echosonusharma/static-assets/main/Icons/nextJS.svg'
                alt='NextJS'
                name='NextJS'
            />
            <ImageBox
                src='https://raw.githubusercontent.com/echosonusharma/static-assets/main/Icons/tailwindCSS.svg'
                alt='TailwindCSS'
                name='TailwindCSS'
            />
            <ImageBox
                src='https://raw.githubusercontent.com/echosonusharma/static-assets/main/Icons/chakraUI.png'
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
                src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg'
                alt='NodeJS'
                name='NodeJS'
            />
            <ImageBox
                src='https://raw.githubusercontent.com/echosonusharma/static-assets/main/Icons/express-js.png'
                alt='ExpressJS'
                name='ExpressJS'
            />
            <ImageBox
                src='https://raw.githubusercontent.com/echosonusharma/static-assets/main/Icons/postgresql.svg'
                alt='PostgreSQL'
                name='PostgreSQL'
            />

        </>
    )
};


const Tools = () => {
    return (
        <>
            <ImageBox
                src='https://raw.githubusercontent.com/echosonusharma/static-assets/main/Icons/linux.png'
                alt='Linux'
                name='Linux'
            />
            <ImageBox
                src='https://raw.githubusercontent.com/echosonusharma/static-assets/main/Icons/bash.svg'
                alt='Bash'
                name='Bash'
            />
            <ImageBox
                src='https://raw.githubusercontent.com/echosonusharma/static-assets/main/Icons/git.png'
                alt='Git'
                name='Git'
            />
            <ImageBox
                src='https://raw.githubusercontent.com/echosonusharma/static-assets/main/Icons/vscode.svg'
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
            <Box py={['1rem', '3rem', '4rem']}>
                <Center
                    fontFamily='Monoton'
                    fontWeight="400"
                    fontSize={['4xl', '6xl']}
                    py={['1rem', '3rem', '5rem']}
                >SKILLS</Center>
                <Box fontFamily='Poppins' w={['80vw']} px={['10vw', '15vw', '20vw']}>
                    <HStack>
                        <Flex d="row" >

                            <Box py={['1rem', '2rem']}>
                                <Box>
                                    <Text fontSize={['1rem', '1.4rem', '1.6rem']} >Languages</Text>
                                    <Box w="4rem" h="0.2rem" bg="blue.200" borderRadius="2xl" mb="2rem" />
                                </Box>
                                <Box pl={['1rem', '2rem', '4rem']} py={['1rem', '1.5rem']}>
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

                            <Box py={['1rem', '2rem']}>
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


                            <Box py={['1rem', '2rem']}>
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
                                            <Grid templateColumns="repeat(3, 1fr)" >
                                                <BackEnd />
                                            </Grid>
                                    }
                                </Box>
                            </Box>

                            <Box py={['1rem', '2rem']}>
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