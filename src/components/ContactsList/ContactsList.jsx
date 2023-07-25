import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { selectContactsArr, selectVisibleContacts } from "redux/contacts/selectors";
import { Loader } from "components/Loader/Loader";
import {
    StyledListOfContacts,
    StyledContactItem,
    StyledDeleteButton
} from "./ContactsList.styled";
import Notiflix from "notiflix";

export const ContactsList = () => {
    
    const dispatch = useDispatch();

    const { isLoading, error } = useSelector(selectContactsArr);

    const visibleContacts = useSelector(selectVisibleContacts);

    const handleDeleteContact = ({id, name}) => {
        dispatch(deleteContact(id));
        Notiflix.Notify.success(`${name} was deleted from your contacts`);
    }
    
    return (
        <>
            {visibleContacts.length > 0 &&
                <StyledListOfContacts>
                    {isLoading &&
                        <Loader />
                    }
                    {error &&
                        <p>
                            {error}
                        </p>
                    }
                    {visibleContacts.map((contact) => (
                        <StyledContactItem
                            key={contact.id}>
                            <p>
                                {contact.name}:
                                <span>
                                    {contact.number}
                                </span>
                            </p>
                            <StyledDeleteButton
                                onClick={() => handleDeleteContact(contact)}
                            >
                                Delete
                            </StyledDeleteButton>
                        </StyledContactItem>
                    ))}
                </StyledListOfContacts>
            }
        </>
    );
};