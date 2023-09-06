import { createUserFromDiscriminatorValue } from './createUserFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeUser } from './serializeUser';
import { type User } from './user';
import { type UserCollectionResponse } from './userCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserCollectionResponse(userCollectionResponse: UserCollectionResponse | undefined = {} as UserCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userCollectionResponse),
        "value": n => { userCollectionResponse.value = n.getCollectionOfObjectValues<User>(createUserFromDiscriminatorValue); },
    }
}
