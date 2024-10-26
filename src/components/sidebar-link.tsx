import { Button, type ButtonProps } from "../components/ui/button";

interface Props extends ButtonProps {
  href?: string;
}

export const SidebarLink = (props: Props) => {
  const { children, href, ...buttonProps } = props;
  return (
    <Button
      variant="ghost"
      colorPalette="gray"
      justifyContent="start"
      gap="3"
      _currentPage={{ background: "colorPalette.subtle" }}
      asChild
      {...buttonProps}
    >
      <a href={href}>{children}</a>
    </Button>
  );
};
