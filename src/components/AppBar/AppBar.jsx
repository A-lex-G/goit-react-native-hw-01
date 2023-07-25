import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { useAuth } from "hooks";
import { StyledHeader } from "./AppBar.styled";

export const AppBar = () => {

    const { isLoggedIn } = useAuth();
    
    return (
        <StyledHeader>
            <Navigation />
            {isLoggedIn
                ? <UserMenu />
                : <AuthNav />}
        </StyledHeader>
    )
}