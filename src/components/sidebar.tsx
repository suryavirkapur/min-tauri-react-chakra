import {
  Box,
  HStack,
  Icon,
  IconButton,
  Input,
  Link,
  Stack,
  type StackProps,
  StackSeparator,
  Text,
} from "@chakra-ui/react";
import {
  BookmarkIcon,
  ClockIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  MoreVerticalIcon,
  PieChartIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";
import { Avatar } from "../components/ui/avatar";
import { InputGroup } from "../components/ui/input-group";
import { DocumentsLinks } from "./documents-link";
import { Logo } from "./logo";
import { SidebarLink } from "./sidebar-link";

export const Sidebar = (props: StackProps) => {
  return (
    <Stack
      flex="1"
      p={{ base: "4", md: "6" }}
      bg="bg.panel"
      borderRightWidth="1px"
      justifyContent="space-between"
      maxW="xs"
      {...props}
    >
      <Stack gap="6">
        <Link aria-label="Back to home" alignItems="start" colorPalette="gray">
          <Logo />
        </Link>
        <InputGroup
          flex="1"
          startElement={
            <Icon size="sm">
              <SearchIcon />
            </Icon>
          }
        >
          <Input placeholder="Search" />
        </InputGroup>
        <Stack gap="1">
          <SidebarLink aria-current="page">
            <LayoutDashboardIcon /> Dashboard
          </SidebarLink>
          <SidebarLink>
            <PieChartIcon /> Analysis
          </SidebarLink>
          <DocumentsLinks />
          <SidebarLink>
            <ClockIcon /> History
          </SidebarLink>
          <SidebarLink>
            <BookmarkIcon /> Favorites
          </SidebarLink>
        </Stack>
      </Stack>
      <Stack gap="4" separator={<StackSeparator />}>
        <Box />
        <Stack gap="1">
          <SidebarLink>
            <HelpCircleIcon /> Help Center
          </SidebarLink>
          <SidebarLink>
            <SettingsIcon /> Settings
          </SidebarLink>
        </Stack>
        <HStack gap="3" justify="space-between">
          <HStack gap="3">
            <Avatar boxSize="10" src="https://i.pravatar.cc/300" />
            <Box>
              <Text textStyle="sm" fontWeight="medium">
                John Doe
              </Text>
              <Text textStyle="sm" color="fg.muted"></Text>
            </Box>
          </HStack>
          <IconButton
            variant="ghost"
            colorPalette="gray"
            aria-label="Open Menu"
          >
            <MoreVerticalIcon />
          </IconButton>
        </HStack>
      </Stack>
    </Stack>
  );
};
