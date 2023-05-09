import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserConsentRequest} from './serializeUserConsentRequest';
import {UserConsentRequest} from './userConsentRequest';
import {UserConsentRequestCollectionResponse} from './userConsentRequestCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserConsentRequestCollectionResponse(writer: SerializationWriter, userConsentRequestCollectionResponse: UserConsentRequestCollectionResponse | undefined = {} as UserConsentRequestCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userConsentRequestCollectionResponse)
        writer.writeCollectionOfObjectValues<UserConsentRequest>("value", userConsentRequestCollectionResponse.value, serializeUserConsentRequest);
}
