import {VoiceAuthenticationMethodConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVoiceAuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : VoiceAuthenticationMethodConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VoiceAuthenticationMethodConfiguration();
}
