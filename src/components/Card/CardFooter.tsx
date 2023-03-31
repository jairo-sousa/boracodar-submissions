import { Flex, Text } from "@chakra-ui/react";
import { Dot } from "../Dot";

export function CardFooter() {
	return (
		<Flex justify="space-between">
			<Text fontSize="1.4rem" fontWeight={400} opacity="0.5">
				Seu nome aqui
			</Text>
			<Flex gap="0.6rem" align="center">
				<Dot />
				<Dot />
				<Text mx="0.1rem" opacity="0.5">
					/
				</Text>
				<Dot />
				<Dot />
			</Flex>
		</Flex>
	);
}
