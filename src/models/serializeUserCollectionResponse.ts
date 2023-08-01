import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUser} from './serializeUser';
import type {User} from './user';
import type {UserCollectionResponse} from './userCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserCollectionResponse(writer: SerializationWriter, userCollectionResponse: UserCollectionResponse | undefined = {} as UserCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userCollectionResponse)
        writer.writeCollectionOfObjectValues<User>("value", userCollectionResponse.value, serializeUser);
}
