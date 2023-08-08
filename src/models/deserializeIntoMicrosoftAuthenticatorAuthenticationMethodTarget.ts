import {deserializeIntoAuthenticationMethodTarget} from './deserializeIntoAuthenticationMethodTarget';
import type {MicrosoftAuthenticatorAuthenticationMethodTarget} from './microsoftAuthenticatorAuthenticationMethodTarget';
import {MicrosoftAuthenticatorAuthenticationMode} from './microsoftAuthenticatorAuthenticationMode';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftAuthenticatorAuthenticationMethodTarget(microsoftAuthenticatorAuthenticationMethodTarget: MicrosoftAuthenticatorAuthenticationMethodTarget | undefined = {} as MicrosoftAuthenticatorAuthenticationMethodTarget) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethodTarget(microsoftAuthenticatorAuthenticationMethodTarget),
        "authenticationMode": n => { microsoftAuthenticatorAuthenticationMethodTarget.authenticationMode = n.getEnumValue<MicrosoftAuthenticatorAuthenticationMode>(MicrosoftAuthenticatorAuthenticationMode); },
    }
}
