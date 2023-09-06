import { deserializeIntoAuthenticationCombinationConfigurationCollectionResponse } from './deserializeIntoAuthenticationCombinationConfigurationCollectionResponse';
import { type AuthenticationCombinationConfigurationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAuthenticationCombinationConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationCombinationConfigurationCollectionResponse;
}
