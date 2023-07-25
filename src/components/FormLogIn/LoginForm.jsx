import { useDispatch } from "react-redux";
import { LogIn } from "redux/auth/operations";
import {
    StyledLoginForm,
    StyledLogInputWrapper,
    StyledLoginButton,
    StyledLabel,
    StyledInput
} from "./LoginForm.styled";

export const LoginForm = () => {

    const dispatch = useDispatch();

    const handleLogIn = e => {

        e.preventDefault();

        const form = e.target;

        const data = e.currentTarget.elements;
        const logInCredentials = {
            email: data.email.value,
            password: data.password.value,
        }
        dispatch(LogIn(logInCredentials));
        
        form.reset();
    }

    return (
        <>
            <StyledLoginForm
                onSubmit={handleLogIn}
                autoComplete="off"
            >
                <StyledLogInputWrapper>
                    <StyledLabel
                        placeholder="please set your email"
                    >
                        Email :
                        <StyledInput
                            type="email"
                            name="email"
                        />
                    </StyledLabel>
                    <StyledLabel
                        placeholder="please set your password"
                    >
                        Password :
                        <StyledInput
                            type="password"
                            name="password"
                        />
                    </StyledLabel>
                </StyledLogInputWrapper>
                <StyledLoginButton
                    type="submit">
                    LogIn
                </StyledLoginButton>
            </StyledLoginForm>
        </>
    )
}