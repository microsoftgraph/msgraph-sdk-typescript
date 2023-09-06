import { deserializeIntoAuthenticationMethodConfigurationCollectionResponse } from './deserializeIntoAuthenticationMethodConfigurationCollectionResponse';
import { type AuthenticationMethodConfigurationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationMethodConfigurationCollectionResponse;
}
