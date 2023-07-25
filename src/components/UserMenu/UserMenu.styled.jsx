import styled from "@emotion/styled";

export const StyledMenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const StyledLogOutButton = styled.button`
    border: 1px solid var(--navy-blue);
    border-radius: 50%;
    border-radius: 4px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    :hover {
        background-color: tomato;
        border: 1px solid var(--cornflower);
    }
`
export const StyledUserGreeting = styled.p`
    color: tomato;
`