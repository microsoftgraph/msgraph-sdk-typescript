import { deserializeIntoUserConsentRequestCollectionResponse } from './deserializeIntoUserConsentRequestCollectionResponse';
import { type UserConsentRequestCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserConsentRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserConsentRequestCollectionResponse;
}
