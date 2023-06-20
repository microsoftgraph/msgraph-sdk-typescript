import {MicrosoftAuthenticatorAuthenticationMethodTarget} from './microsoftAuthenticatorAuthenticationMethodTarget';
import {MicrosoftAuthenticatorAuthenticationMode} from './microsoftAuthenticatorAuthenticationMode';
import {serializeAuthenticationMethodTarget} from './serializeAuthenticationMethodTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMicrosoftAuthenticatorAuthenticationMethodTarget(microsoftAuthenticatorAuthenticationMethodTarget: MicrosoftAuthenticatorAuthenticationMethodTarget | undefined = {} as MicrosoftAuthenticatorAuthenticationMethodTarget, writer: SerializationWriter) : void {
        serializeAuthenticationMethodTarget(writer, microsoftAuthenticatorAuthenticationMethodTarget)
        writer.writeEnumValue<MicrosoftAuthenticatorAuthenticationMode>("authenticationMode", microsoftAuthenticatorAuthenticationMethodTarget.authenticationMode);
}
