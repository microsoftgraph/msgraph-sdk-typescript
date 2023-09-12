import { deserializeIntoAuthenticationContextClassReferenceCollectionResponse } from './deserializeIntoAuthenticationContextClassReferenceCollectionResponse';
import { type AuthenticationContextClassReferenceCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAuthenticationContextClassReferenceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationContextClassReferenceCollectionResponse;
}
