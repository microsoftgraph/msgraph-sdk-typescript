import {createUserRegistrationDetailsFromDiscriminatorValue} from './createUserRegistrationDetailsFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserRegistrationDetails} from './serializeUserRegistrationDetails';
import {UserRegistrationDetails} from './userRegistrationDetails';
import {UserRegistrationDetailsCollectionResponse} from './userRegistrationDetailsCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserRegistrationDetailsCollectionResponse(userRegistrationDetailsCollectionResponse: UserRegistrationDetailsCollectionResponse | undefined = {} as UserRegistrationDetailsCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userRegistrationDetailsCollectionResponse),
        "value": n => { userRegistrationDetailsCollectionResponse.value = n.getCollectionOfObjectValues<UserRegistrationDetails>(createUserRegistrationDetailsFromDiscriminatorValue); },
    }
}
