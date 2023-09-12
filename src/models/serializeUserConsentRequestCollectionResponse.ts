import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeUserConsentRequest } from './serializeUserConsentRequest';
import { type UserConsentRequest } from './userConsentRequest';
import { type UserConsentRequestCollectionResponse } from './userConsentRequestCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserConsentRequestCollectionResponse(writer: SerializationWriter, userConsentRequestCollectionResponse: UserConsentRequestCollectionResponse | undefined = {} as UserConsentRequestCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userConsentRequestCollectionResponse)
        writer.writeCollectionOfObjectValues<UserConsentRequest>("value", userConsentRequestCollectionResponse.value, serializeUserConsentRequest);
}
