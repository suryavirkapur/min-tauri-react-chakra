"use client";
import { Button, Collapsible, HStack, Icon, Stack } from "@chakra-ui/react";
import { ChevronDownIcon, FileIcon } from "lucide-react";
import { SidebarLink } from "./sidebar-link";

export const DocumentsLinks = () => {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger asChild>
        <Button
          variant="ghost"
          colorPalette="gray"
          width="full"
          justifyContent="start"
        >
          <HStack justifyContent="space-between" width="full">
            <HStack gap="3">
              <FileIcon />
              Documents
            </HStack>
            <Collapsible.Context>
              {(context) => (
                <Icon
                  aria-hidden
                  transition="transform 0.2s"
                  transformOrigin="center"
                  transform={context.open ? "rotate(180deg)" : undefined}
                >
                  <ChevronDownIcon />
                </Icon>
              )}
            </Collapsible.Context>
          </HStack>
        </Button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Stack gap="1" py="1">
          {["Resumes", "Cover Letter", "Personal", "Education"].map((item) => (
            <SidebarLink key={item} ps="12">
              {item}
            </SidebarLink>
          ))}
        </Stack>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
