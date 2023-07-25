// import { Link } from "react-router-dom";
import { StyledBackLink } from "./BackLink.styled";

export const BackLink = () => {
    return (
        <StyledBackLink
            to='/'
        >
            Link to Homepage
        </StyledBackLink>
    )
}