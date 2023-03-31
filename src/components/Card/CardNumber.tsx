import { Flex, Text } from "@chakra-ui/react";
import { Dot } from "../Dot";

export function CardNumber() {
	return (
		<Flex align="center" justify="space-between">
			<Text letterSpacing="0.4rem">4716</Text>
			<Text letterSpacing="0.4rem">8039</Text>
			<Flex letterSpacing="0.4rem" align="center" gap="0.6rem">
				<Text>02</Text>
				<Dot />
				<Dot />
			</Flex>
			<Flex gap="0.6rem">
				<Dot />
				<Dot />
				<Dot />
				<Dot />
			</Flex>
		</Flex>
	);
}
