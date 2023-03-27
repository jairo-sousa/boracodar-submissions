import { Box, Flex, Img, Text } from "@chakra-ui/react";
type NavLinkProps = {
	link: {
		name: string;
		icon: string;
	};
	active?: boolean;
};
export function NavLink({ link, active }: NavLinkProps) {
	return (
		<Flex
			as="li"
			w="100%"
			justify="start"
			align="center"
			gap="1.6rem"
			cursor="pointer"
		>
			<Img src={link.icon} w="1.5rem" h="2rem" />
			<Box as="a">
				<Text fontWeight={active ? 700 : 500}>{link.name}</Text>
			</Box>
		</Flex>
	);
}
