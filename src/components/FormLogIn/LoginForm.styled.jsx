import styled from "@emotion/styled";

export const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
    width: fit-content;
    padding: 10px 10px;
    border: 1px solid var(--cornflower);
    border-radius: 4px;
    background-color: var(--light-slate);
`
export const StyledLogInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    row-gap: 10px;
`
export const StyledLoginButton = styled.button`
    display: inline-block;
    border: 1px solid var(--green);
    background-color: var(--cornflower);
    border-radius: 4px;
    margin-top: 20px;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
        background-color: var(--green);
        border: 1px solid var(--cornflower);
    }
`
export const StyledLabel = styled.label`
    color: var(--navy-blue); 
`
export const StyledInput = styled.input`
    border: 1px solid var(--navy-blue);
    border-radius: 4px;
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
        border: 1px solid var(--green);
    }
`