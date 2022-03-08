import {AuthenticationMethodConfigurationCollectionResponse} from './authenticationMethodConfigurationCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationMethodConfigurationCollectionResponse();
}
