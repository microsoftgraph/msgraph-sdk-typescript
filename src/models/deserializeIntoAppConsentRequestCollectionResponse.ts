import { type AppConsentRequest } from './appConsentRequest';
import { type AppConsentRequestCollectionResponse } from './appConsentRequestCollectionResponse';
import { createAppConsentRequestFromDiscriminatorValue } from './createAppConsentRequestFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeAppConsentRequest } from './serializeAppConsentRequest';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAppConsentRequestCollectionResponse(appConsentRequestCollectionResponse: AppConsentRequestCollectionResponse | undefined = {} as AppConsentRequestCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(appConsentRequestCollectionResponse),
        "value": n => { appConsentRequestCollectionResponse.value = n.getCollectionOfObjectValues<AppConsentRequest>(createAppConsentRequestFromDiscriminatorValue); },
    }
}
