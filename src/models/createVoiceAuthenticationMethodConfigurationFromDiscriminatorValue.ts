import {deserializeIntoVoiceAuthenticationMethodConfiguration} from './deserializeIntoVoiceAuthenticationMethodConfiguration';
import {VoiceAuthenticationMethodConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVoiceAuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVoiceAuthenticationMethodConfiguration;
}
