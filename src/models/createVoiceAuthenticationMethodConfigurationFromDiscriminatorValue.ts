import { deserializeIntoVoiceAuthenticationMethodConfiguration } from './deserializeIntoVoiceAuthenticationMethodConfiguration';
import { type VoiceAuthenticationMethodConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createVoiceAuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVoiceAuthenticationMethodConfiguration;
}
