import {createUserConsentRequestFromDiscriminatorValue} from './createUserConsentRequestFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserConsentRequest} from './serializeUserConsentRequest';
import {UserConsentRequest} from './userConsentRequest';
import {UserConsentRequestCollectionResponse} from './userConsentRequestCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserConsentRequestCollectionResponse(userConsentRequestCollectionResponse: UserConsentRequestCollectionResponse | undefined = {} as UserConsentRequestCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userConsentRequestCollectionResponse),
        "value": n => { userConsentRequestCollectionResponse.value = n.getCollectionOfObjectValues<UserConsentRequest>(createUserConsentRequestFromDiscriminatorValue); },
    }
}
