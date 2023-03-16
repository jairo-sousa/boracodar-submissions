import { Flex, Heading, Text } from "@chakra-ui/react";

export function Header() {
	return (
		<Flex direction="column" w="35.1rem" gap="1.6rem">
			<Heading
				as="h1"
				fontFamily="Titillium Web"
				fontSize="3.6rem"
				fontWeight={700}
			>
				Acesse a plataforma
			</Heading>
			<Text>
				Faça login ou registre-se para começar a construir seus projetos ainda
				hoje.
			</Text>
		</Flex>
	);
}
