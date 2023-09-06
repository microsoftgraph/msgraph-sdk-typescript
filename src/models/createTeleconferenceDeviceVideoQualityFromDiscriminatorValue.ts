import { deserializeIntoTeleconferenceDeviceScreenSharingQuality } from './deserializeIntoTeleconferenceDeviceScreenSharingQuality';
import { deserializeIntoTeleconferenceDeviceVideoQuality } from './deserializeIntoTeleconferenceDeviceVideoQuality';
import { type TeleconferenceDeviceScreenSharingQuality, type TeleconferenceDeviceVideoQuality } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeleconferenceDeviceVideoQualityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.teleconferenceDeviceScreenSharingQuality":
                    return deserializeIntoTeleconferenceDeviceScreenSharingQuality;
            }
        }
    }
    return deserializeIntoTeleconferenceDeviceVideoQuality;
}
