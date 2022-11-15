import {MicrosoftAuthenticatorAuthenticationMethodConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMicrosoftAuthenticatorAuthenticationMethodConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MicrosoftAuthenticatorAuthenticationMethodConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MicrosoftAuthenticatorAuthenticationMethodConfigurationCollectionResponse();
}
