import { type MicrosoftAuthenticatorAuthenticationMethodTarget } from './microsoftAuthenticatorAuthenticationMethodTarget';
import { MicrosoftAuthenticatorAuthenticationMode } from './microsoftAuthenticatorAuthenticationMode';
import { serializeAuthenticationMethodTarget } from './serializeAuthenticationMethodTarget';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMicrosoftAuthenticatorAuthenticationMethodTarget(writer: SerializationWriter, microsoftAuthenticatorAuthenticationMethodTarget: MicrosoftAuthenticatorAuthenticationMethodTarget | undefined = {} as MicrosoftAuthenticatorAuthenticationMethodTarget) : void {
        serializeAuthenticationMethodTarget(writer, microsoftAuthenticatorAuthenticationMethodTarget)
        writer.writeEnumValue<MicrosoftAuthenticatorAuthenticationMode>("authenticationMode", microsoftAuthenticatorAuthenticationMethodTarget.authenticationMode);
}
