import {TeleconferenceDeviceAudioQualityImpl, TeleconferenceDeviceMediaQualityImpl, TeleconferenceDeviceVideoQualityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeleconferenceDeviceMediaQualityFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeleconferenceDeviceMediaQualityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.teleconferenceDeviceAudioQuality":
                    return new TeleconferenceDeviceAudioQualityImpl();
                case "#microsoft.graph.teleconferenceDeviceVideoQuality":
                    return new TeleconferenceDeviceVideoQualityImpl();
            }
        }
    }
    return new TeleconferenceDeviceMediaQualityImpl();
}
