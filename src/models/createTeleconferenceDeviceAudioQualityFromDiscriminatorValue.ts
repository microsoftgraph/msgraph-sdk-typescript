import {deserializeIntoTeleconferenceDeviceAudioQuality} from './deserializeIntoTeleconferenceDeviceAudioQuality';
import {TeleconferenceDeviceAudioQuality} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeleconferenceDeviceAudioQualityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeleconferenceDeviceAudioQuality;
}
