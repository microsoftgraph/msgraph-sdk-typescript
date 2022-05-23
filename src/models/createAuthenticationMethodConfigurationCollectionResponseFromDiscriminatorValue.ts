import {AuthenticationMethodConfigurationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodConfigurationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationMethodConfigurationCollectionResponseImpl();
}
