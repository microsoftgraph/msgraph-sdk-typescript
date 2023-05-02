import {deserializeIntoMicrosoftAuthenticatorAuthenticationMethodConfiguration} from './deserializeIntoMicrosoftAuthenticatorAuthenticationMethodConfiguration';
import {MicrosoftAuthenticatorAuthenticationMethodConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMicrosoftAuthenticatorAuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMicrosoftAuthenticatorAuthenticationMethodConfiguration;
}
