import { useAuth } from "hooks";
import { useDispatch } from "react-redux"
import { LogOut } from "redux/auth/operations";
import {
    StyledMenuWrapper,
    StyledLogOutButton,
    StyledUserGreeting,
} from "./UserMenu.styled";

export const UserMenu = () => {

    const dispatch = useDispatch();
    
    const { user } = useAuth();

    return (
        <StyledMenuWrapper>
            <StyledUserGreeting>
                Wellcome, 
                {user.name}
            </StyledUserGreeting>
            <StyledLogOutButton
                type='button'
                onClick={() => dispatch(LogOut())}>
                LogOut
            </StyledLogOutButton>
        </StyledMenuWrapper>
    )
}