import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: var(--cloud);
    padding: 10px;

    &.active {
        background-color: tomato;
        border-radius: 4px;
    }
`
