import { deserializeIntoMicrosoftAuthenticatorAuthenticationMethod } from './deserializeIntoMicrosoftAuthenticatorAuthenticationMethod';
import { type MicrosoftAuthenticatorAuthenticationMethod } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMicrosoftAuthenticatorAuthenticationMethod;
}
