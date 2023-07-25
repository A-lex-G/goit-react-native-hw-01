import { useAuth } from "hooks"
import {
    StyledNavWrapper,
    StyledNavlink,
} from "./Navigation.styled";

export const Navigation = () => {
    
    const { isLoggedIn } = useAuth();

    return (
        <StyledNavWrapper>
            <StyledNavlink
                to='/'
                css={StyledNavlink}
                // activeClassName="active"
            >
                Home
            </StyledNavlink>
            {isLoggedIn && (
                <StyledNavlink to = '/contacts'>
                    Contacts
                </StyledNavlink>
            )}
        </StyledNavWrapper>
    )
}