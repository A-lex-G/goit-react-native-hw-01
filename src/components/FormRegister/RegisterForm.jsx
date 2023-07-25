import { useDispatch } from "react-redux"
import { register } from "redux/auth/operations";
import {
    StyledRegisterForm,
    StyledRegWrapper,
    StyledRegisterButton,
    StyledLabel,
    StyledInput
} from "./RegisterForm.styled";

export const RegisterForm = () => {
    
    const dispatch = useDispatch();

    const handleRegistration = e => {

        e.preventDefault();

        const form = e.target;
        
        const data = e.currentTarget.elements;
        const registrationCredentials = {
            name: data.name.value,
            email: data.email.value,
            password: data.password.value,
        }
        dispatch(register(registrationCredentials));

        form.reset();
    }

    return (
        <StyledRegisterForm
            onSubmit={handleRegistration}
            autoComplete="off">
            <StyledRegWrapper>
                <StyledLabel>
                    User name :
                    <StyledInput
                        type="text"
                        name='name'
                        placeholder="please set user name"
                    />
                </StyledLabel>
                <StyledLabel>
                    User email :
                    <StyledInput
                        type="email"
                        name='email'
                        placeholder="please set user email"
                    />
                </StyledLabel>
                <StyledLabel>
                    User password :
                    <StyledInput
                        type="password"
                        name='password'
                        placeholder="please set user password"
                    />
                </StyledLabel>
            </StyledRegWrapper>
            <StyledRegisterButton
                type="submit">
                Register
            </StyledRegisterButton>
        </StyledRegisterForm>
    )
}