import { BackLink } from "components/BackLink/BackLink";

const NotFound = () => {

    return (
        <>
            <p>
            Given the incorrect path You've been redirected to this page.
            You may click link suggested below to proceed...
        </p>
        <BackLink to='/'>Link to Homepage</BackLink>
        </>
    )
}

export default NotFound;