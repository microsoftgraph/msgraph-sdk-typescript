import { deserializeIntoTeleconferenceDeviceScreenSharingQuality } from './deserializeIntoTeleconferenceDeviceScreenSharingQuality';
import { type TeleconferenceDeviceScreenSharingQuality } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeleconferenceDeviceScreenSharingQualityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeleconferenceDeviceScreenSharingQuality;
}
