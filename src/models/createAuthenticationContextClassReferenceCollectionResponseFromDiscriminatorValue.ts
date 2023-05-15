import {deserializeIntoAuthenticationContextClassReferenceCollectionResponse} from './deserializeIntoAuthenticationContextClassReferenceCollectionResponse';
import {AuthenticationContextClassReferenceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationContextClassReferenceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationContextClassReferenceCollectionResponse;
}
