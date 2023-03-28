import { Flex, Heading, Text } from "@chakra-ui/react";
import { Tag } from "./Tag";

type TaskProps = {
	title: string;
	content: string;
	tags: string[];
};

export function Task({ title, content, tags }: TaskProps) {
	return (
		<Flex
			direction="column"
			w="100%"
			h="15.3rem"
			borderRadius="0.8rem"
			p="2.4rem"
			gap="1rem"
			boxShadow="0px 4px 16px #EAE2FD"
			cursor="pointer"
			draggable
		>
			<Heading as="h4" fontSize="1.4rem">
				{title}
			</Heading>
			<Text noOfLines={2} fontSize="1.4rem" fontWeight={500} color="#756966">
				{content}
			</Text>
			<Flex w="100%" gap="0.8rem" overflow="hidden">
				{tags.map((tag) => (
					<Tag tag={tag} />
				))}
			</Flex>
		</Flex>
	);
}
