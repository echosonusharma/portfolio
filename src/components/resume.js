import React from "react";
import { Box, Center, useMediaQuery } from "@chakra-ui/react";

const Resume = () => {
    const [lg] = useMediaQuery("(min-width: 1280px)");

    return (
        <Box>
            <Center
                fontFamily='Monoton'
                fontWeight="400"
                fontSize={['4xl', '6xl']}
                py={['1rem', '3rem', '5rem']}
            >RESUME</Center>
            <Box>
                <Center>
                    <div style={{ height: '50rem', width: '0.1rem', backgroundColor: '#ff0080' }} />
                </Center>
            </Box>
        </Box>
    )
};

export default Resume;