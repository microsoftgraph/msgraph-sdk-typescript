import { deserializeIntoAppConsentRequestCollectionResponse } from './deserializeIntoAppConsentRequestCollectionResponse';
import { type AppConsentRequestCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAppConsentRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppConsentRequestCollectionResponse;
}
