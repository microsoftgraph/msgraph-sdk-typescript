import {TeleconferenceDeviceAudioQuality, TeleconferenceDeviceMediaQuality, TeleconferenceDeviceScreenSharingQuality, TeleconferenceDeviceVideoQuality} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeleconferenceDeviceMediaQualityFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeleconferenceDeviceMediaQuality {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.teleconferenceDeviceAudioQuality":
                    return new TeleconferenceDeviceAudioQuality();
                case "#microsoft.graph.teleconferenceDeviceScreenSharingQuality":
                    return new TeleconferenceDeviceScreenSharingQuality();
                case "#microsoft.graph.teleconferenceDeviceVideoQuality":
                    return new TeleconferenceDeviceVideoQuality();
            }
        }
    }
    return new TeleconferenceDeviceMediaQuality();
}
