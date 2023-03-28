import { Flex, Heading } from "@chakra-ui/react";
import { Task } from "./Task";

type KanbanStepProps = {
	title: string;
	children: React.ReactNode;
};
export function KanbanStep({ title, children }: KanbanStepProps) {
	return (
		<Flex direction="column" gap="2.4rem" p="2.4rem" minW="36.9rem" flex={1}>
			<Heading as="h3" fontSize="2rem">
				{title}
			</Heading>
			{children}
		</Flex>
	);
}
