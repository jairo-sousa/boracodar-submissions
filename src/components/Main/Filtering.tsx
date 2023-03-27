import { Button, Flex, Img, Input, Text } from "@chakra-ui/react";

import filter from "/Main/filter.svg";
import search from "/Main/search.svg";

export function Filtering() {
	return (
		<Flex px="2.4rem" gap="1.6rem" w="100%" h="4.8rem">
			<Button
				bg="#7C3AED"
				w="13.5rem"
				h="100%"
				gap="0.8rem"
				borderRadius="0.5rem"
			>
				<Img src={filter} />
				<Text fontSize="1.4rem" fontWeight={400} color="#ffffff">
					Filtrar
				</Text>
			</Button>
			<Flex
				h="100%"
				w="100%"
				boxShadow="0px 4px 16px rgba(22, 22, 22, 0.1)"
				px="2.4rem"
				align="center"
				gap="1rem"
			>
				<Img src={search} w="2.4rem" cursor="pointer" />
				<Input
					placeholder="Busque por cards, assuntos ou responsáveis..."
					fontSize="1.6rem"
					fontWeight={400}
					border="none"
				/>
			</Flex>
		</Flex>
	);
}
