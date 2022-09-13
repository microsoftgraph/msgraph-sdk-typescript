import {TeleconferenceDeviceScreenSharingQuality, TeleconferenceDeviceVideoQuality} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeleconferenceDeviceVideoQualityFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeleconferenceDeviceVideoQuality {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.teleconferenceDeviceScreenSharingQuality":
                    return new TeleconferenceDeviceScreenSharingQuality();
            }
        }
    }
    return new TeleconferenceDeviceVideoQuality();
}
