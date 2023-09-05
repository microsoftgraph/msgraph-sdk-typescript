import { deserializeIntoMicrosoftAuthenticatorAuthenticationMethodTarget } from './deserializeIntoMicrosoftAuthenticatorAuthenticationMethodTarget';
import { type MicrosoftAuthenticatorAuthenticationMethodTarget } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMicrosoftAuthenticatorAuthenticationMethodTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMicrosoftAuthenticatorAuthenticationMethodTarget;
}
