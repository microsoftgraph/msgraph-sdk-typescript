import {VoiceAuthenticationMethodConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVoiceAuthenticationMethodConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : VoiceAuthenticationMethodConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VoiceAuthenticationMethodConfigurationCollectionResponse();
}
