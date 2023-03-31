import { Flex, Img, Text } from "@chakra-ui/react";
import { CardWraper } from "../CardWrapper";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";
import { CardNumber } from "./CardNumber";

type CardProps = {
	brand: string;
};
export function Card({ brand }: CardProps) {
	return (
		<Flex as={CardWraper}>
			<CardHeader brand={brand} />
			<Flex direction="column" gap="2.4rem">
				<CardNumber />
				<CardFooter />
			</Flex>
		</Flex>
	);
}
