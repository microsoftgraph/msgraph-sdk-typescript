import { deserializeIntoAuthenticationMethodCollectionResponse } from './deserializeIntoAuthenticationMethodCollectionResponse';
import { type AuthenticationMethodCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationMethodCollectionResponse;
}
