import { Flex } from "@chakra-ui/react";
import { AddButton } from "./components/AddButon";

export function App() {
	return (
		<Flex
			w="73.6rem"
			h="42rem"
			bg="#1F2937"
			border="0.1rem solid #374151"
			borderRadius="0.8rem"
			p="3.2rem"
			direction="column"
			justify="space-between"
		>
			Form + card
			<AddButton />
		</Flex>
	);
}
