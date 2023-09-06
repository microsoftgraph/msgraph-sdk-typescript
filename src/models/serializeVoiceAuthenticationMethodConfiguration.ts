import { type AuthenticationMethodTarget } from './authenticationMethodTarget';
import { serializeAuthenticationMethodConfiguration } from './serializeAuthenticationMethodConfiguration';
import { serializeAuthenticationMethodTarget } from './serializeAuthenticationMethodTarget';
import { type VoiceAuthenticationMethodConfiguration } from './voiceAuthenticationMethodConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeVoiceAuthenticationMethodConfiguration(writer: SerializationWriter, voiceAuthenticationMethodConfiguration: VoiceAuthenticationMethodConfiguration | undefined = {} as VoiceAuthenticationMethodConfiguration) : void {
        serializeAuthenticationMethodConfiguration(writer, voiceAuthenticationMethodConfiguration)
        writer.writeCollectionOfObjectValues<AuthenticationMethodTarget>("includeTargets", voiceAuthenticationMethodConfiguration.includeTargets, serializeAuthenticationMethodTarget);
        writer.writeBooleanValue("isOfficePhoneAllowed", voiceAuthenticationMethodConfiguration.isOfficePhoneAllowed);
}
