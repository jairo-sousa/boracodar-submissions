import { Flex, Box } from "@chakra-ui/react";

import { links } from "../utils/Nav/links";
import { NavLink } from "./NavLink";

export function Nav() {
	return (
		<Box as="nav">
			<Flex as="ul" direction="column" w="100%" align="center" gap="3.6rem">
				{links.map((link, i) => (
					<NavLink
						key={`${link.name} - ${i}`}
						link={link}
						active={i == 0 ? true : false}
					/>
				))}
			</Flex>
		</Box>
	);
}
