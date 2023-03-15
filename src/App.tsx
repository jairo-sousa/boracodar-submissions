import { Flex } from "@chakra-ui/react";
import { LoginForm } from "./components/LoginForm";
import { Logo } from "./components/Logo";

import { AppWrapper } from "./components/Wrappers/AppWrapper";
import { MainWrapper } from "./components/Wrappers/MainWrapper";

export function App() {
	return (
		<Flex as={AppWrapper}>
			<Flex as={MainWrapper}>
				<Logo />
				<LoginForm />
			</Flex>
		</Flex>
	);
}
