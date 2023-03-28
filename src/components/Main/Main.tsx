import { Flex } from "@chakra-ui/react";
import { Filtering } from "./Filtering";
import { Kanban } from "./Kanban";
import { Title } from "./Title";

export function Main() {
	return (
		<Flex
			direction="column"
			w="100%"
			h="100%"
			bg="#FBFAFF"
			borderTopLeftRadius="3.2rem"
			p="4.8rem 3.2rem"
			gap="3.2rem"
		>
			<Title />
			<Filtering />
			<Kanban />
		</Flex>
	);
}
