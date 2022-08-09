import {MicrosoftAuthenticatorAuthenticationMethodConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMicrosoftAuthenticatorAuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : MicrosoftAuthenticatorAuthenticationMethodConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MicrosoftAuthenticatorAuthenticationMethodConfiguration();
}
