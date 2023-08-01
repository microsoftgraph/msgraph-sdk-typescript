import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserRegistrationDetails} from './serializeUserRegistrationDetails';
import type {UserRegistrationDetails} from './userRegistrationDetails';
import type {UserRegistrationDetailsCollectionResponse} from './userRegistrationDetailsCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserRegistrationDetailsCollectionResponse(writer: SerializationWriter, userRegistrationDetailsCollectionResponse: UserRegistrationDetailsCollectionResponse | undefined = {} as UserRegistrationDetailsCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userRegistrationDetailsCollectionResponse)
        writer.writeCollectionOfObjectValues<UserRegistrationDetails>("value", userRegistrationDetailsCollectionResponse.value, serializeUserRegistrationDetails);
}
