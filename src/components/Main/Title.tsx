import { Box, Flex, Img, Text } from "@chakra-ui/react";

export function Title() {
	return (
		<Flex
			w="100%"
			h="fit-content"
			justify="space-between"
			align="center"
			px="2.1rem"
		>
			<Flex gap="1.2rem">
				<Text fontSize="3.2rem">Meu Kanban</Text>
				<Img src="/Main/pencil.svg" cursor="pointer" />
			</Flex>
			<Box
				w="6.4rem"
				h="6.4rem"
				bg="#7C3AED"
				borderRadius="50%"
				overflow="hidden"
				pos="relative"
			>
				<Img src="/Main/profile.png" pos="absolute" bottom="-1rem" />
			</Box>
		</Flex>
	);
}
0;
