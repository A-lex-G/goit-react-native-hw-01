import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";


export const StyledNavWrapper = styled.nav`
    display: flex;
    column-gap: 10px;
`
export const StyledNavlink = styled(NavLink)`
    text-decoration: none;
    color: var(--cloud);
    padding: 10px;

    &.active {
        background-color: tomato;
        border-radius: 4px;
    }
`