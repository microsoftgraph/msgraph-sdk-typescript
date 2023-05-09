import {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {createAuthenticationMethodTargetFromDiscriminatorValue} from './createAuthenticationMethodTargetFromDiscriminatorValue';
import {deserializeIntoAuthenticationMethodConfiguration} from './deserializeIntoAuthenticationMethodConfiguration';
import {serializeAuthenticationMethodTarget} from './serializeAuthenticationMethodTarget';
import {VoiceAuthenticationMethodConfiguration} from './voiceAuthenticationMethodConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVoiceAuthenticationMethodConfiguration(voiceAuthenticationMethodConfiguration: VoiceAuthenticationMethodConfiguration | undefined = {} as VoiceAuthenticationMethodConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethodConfiguration(voiceAuthenticationMethodConfiguration),
        "includeTargets": n => { voiceAuthenticationMethodConfiguration.includeTargets = n.getCollectionOfObjectValues<AuthenticationMethodTarget>(createAuthenticationMethodTargetFromDiscriminatorValue); },
        "isOfficePhoneAllowed": n => { voiceAuthenticationMethodConfiguration.isOfficePhoneAllowed = n.getBooleanValue(); },
    }
}
