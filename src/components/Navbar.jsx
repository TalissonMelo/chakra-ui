import { UnlockIcon } from "@chakra-ui/icons"
import { Flex, Heading, Box, Text, Button, Spacer, HStack, useToast } from "@chakra-ui/react"

export default function Navbar() {
    const toast = useToast()

    const showToast = () => {
        toast({
            title: 'Logged out.',
            description: "Successfully logged out",
            duration: 10000,
            isClosable: true,
            position: 'top',
            status: 'success',
            icon: <UnlockIcon />,
        })
    }

    return (
        <Flex as="nav" p="10px" mb="60px" alignItems="center">
            <Heading as="h1" fontSize="1.5em">@Chakra ui</Heading>
            <Spacer />

            <HStack spacing="20px">
                <Box bg="gray.200" p="10px 15px" borderRadius="50%">T</Box>
                <Text>talissonmelo@</Text>
                <Button
                    colorScheme="purple"
                    onClick={showToast}
                >Logout</Button>
            </HStack>
        </Flex>
    )
}