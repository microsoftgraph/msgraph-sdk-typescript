import {MicrosoftAuthenticatorAuthenticationMethodTarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMicrosoftAuthenticatorAuthenticationMethodTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) : MicrosoftAuthenticatorAuthenticationMethodTarget {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MicrosoftAuthenticatorAuthenticationMethodTarget();
}
