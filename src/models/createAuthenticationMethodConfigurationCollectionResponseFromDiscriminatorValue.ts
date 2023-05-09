import {deserializeIntoAuthenticationMethodConfigurationCollectionResponse} from './deserializeIntoAuthenticationMethodConfigurationCollectionResponse';
import {AuthenticationMethodConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationMethodConfigurationCollectionResponse;
}
