import { Button } from "@shared/ui/Button/Button";
import { StyledHeaderContainer, StyledHeaderLogo } from "./Header.styles";

export const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderLogo>Match Tracker</StyledHeaderLogo>
      <Button>Обновить</Button>
    </StyledHeaderContainer>
  );
};
