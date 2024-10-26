import {
  Container,
  type ContainerProps,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { AlignRightIcon } from "lucide-react";
import {
  DrawerBackdrop,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "../components/ui/drawer";
import { Logo } from "./logo";
import { Sidebar } from "./sidebar";

export const Navbar = (props: ContainerProps) => {
  return (
    <Container
      py="2.5"
      background="bg.panel"
      borderBottomWidth="1px"
      {...props}
    >
      <HStack justify="space-between">
        <Logo />
        <DrawerRoot placement="start">
          <DrawerTrigger asChild>
            <IconButton
              aria-label="Open Menu"
              variant="ghost"
              colorPalette="gray"
            >
              <AlignRightIcon />
            </IconButton>
          </DrawerTrigger>
          <DrawerBackdrop />
          <DrawerContent>
            <DrawerCloseTrigger colorPalette="gray" />
            <Sidebar />
          </DrawerContent>
        </DrawerRoot>
      </HStack>
    </Container>
  );
};
