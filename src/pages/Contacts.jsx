import { ContactsList } from "components/ContactsList/ContactsList";
import { Form } from "components/Form/Form";
import { Loader } from "components/Loader/Loader";
import { SearchInput } from "components/SearchInput/SearchInput";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectContactsArr, selectLoading } from "redux/contacts/selectors";

export default function Contacts() {

    const dispatch = useDispatch();
    
    const isLoading = useSelector(selectLoading);
    const { items } = useSelector(selectContactsArr);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])
    
    return (
        <>
            <Form />
            {isLoading &&
                <Loader />
            }
            {items.length > 0 &&
                <>
                <SearchInput />
                    <ContactsList />
                </>
            }
        </>
    )
}