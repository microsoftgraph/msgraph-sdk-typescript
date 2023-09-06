import { deserializeIntoTeleconferenceDeviceAudioQuality } from './deserializeIntoTeleconferenceDeviceAudioQuality';
import { type TeleconferenceDeviceAudioQuality } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeleconferenceDeviceAudioQualityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeleconferenceDeviceAudioQuality;
}
