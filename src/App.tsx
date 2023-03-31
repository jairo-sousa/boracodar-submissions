import { Flex } from "@chakra-ui/react";
import { AddButton } from "./components/AddButon";
import { Form } from "./components/Form";

export function App() {
	return (
		<Flex
			w="73.6rem"
			bg="#1F2937"
			border="0.1rem solid #374151"
			borderRadius="0.8rem"
			p="3.2rem"
			direction="column"
			justify="space-between"
			gap="4.8rem"
		>
			<Flex w="100%" justify="space-between" align="center">
				<Form />
				<p>Card</p>
			</Flex>
			<AddButton />
		</Flex>
	);
}
