import { Flex, Img } from "@chakra-ui/react";
import contactless from "/contactless.svg";

type CardHeaderProps = {
	brand: string;
};
export function CardHeader({ brand }: CardHeaderProps) {
	return (
		<Flex justify="space-between">
			<Img src={brand} />
			<Img src={contactless} />
		</Flex>
	);
}
