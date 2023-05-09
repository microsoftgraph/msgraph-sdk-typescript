import {createUserFromDiscriminatorValue} from './createUserFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUser} from './serializeUser';
import {User} from './user';
import {UserCollectionResponse} from './userCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserCollectionResponse(userCollectionResponse: UserCollectionResponse | undefined = {} as UserCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userCollectionResponse),
        "value": n => { userCollectionResponse.value = n.getCollectionOfObjectValues<User>(createUserFromDiscriminatorValue); },
    }
}
