import { deserializeIntoTeleconferenceDeviceAudioQuality } from './deserializeIntoTeleconferenceDeviceAudioQuality';
import { deserializeIntoTeleconferenceDeviceMediaQuality } from './deserializeIntoTeleconferenceDeviceMediaQuality';
import { deserializeIntoTeleconferenceDeviceScreenSharingQuality } from './deserializeIntoTeleconferenceDeviceScreenSharingQuality';
import { deserializeIntoTeleconferenceDeviceVideoQuality } from './deserializeIntoTeleconferenceDeviceVideoQuality';
import { type TeleconferenceDeviceAudioQuality, type TeleconferenceDeviceMediaQuality, type TeleconferenceDeviceScreenSharingQuality, type TeleconferenceDeviceVideoQuality } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeleconferenceDeviceMediaQualityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.teleconferenceDeviceAudioQuality":
                    return deserializeIntoTeleconferenceDeviceAudioQuality;
                case "#microsoft.graph.teleconferenceDeviceScreenSharingQuality":
                    return deserializeIntoTeleconferenceDeviceScreenSharingQuality;
                case "#microsoft.graph.teleconferenceDeviceVideoQuality":
                    return deserializeIntoTeleconferenceDeviceVideoQuality;
            }
        }
    }
    return deserializeIntoTeleconferenceDeviceMediaQuality;
}
