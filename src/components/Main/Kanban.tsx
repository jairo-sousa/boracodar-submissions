import { Flex } from "@chakra-ui/react";
import { KanbanStep } from "./KanbanStep";
import { SampleTasks } from "../../utils/Main/SampleTasks";
import { Task } from "./Task";

export function Kanban() {
	return (
		<Flex
			w="100%"
			h="100%"
			justify="space-between"
			overflow="scroll"
			css={{
				"&::-webkit-scrollbar": {
					display: "none",
				},
				"&::-webkit-scrollbar-track": {
					display: "none",
				},
				"&::-webkit-scrollbar-thumb": {
					display: "none",
				},
			}}
		></Flex>
	);
}
