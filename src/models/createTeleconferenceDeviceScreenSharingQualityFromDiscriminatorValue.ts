import {deserializeIntoTeleconferenceDeviceScreenSharingQuality} from './deserializeIntoTeleconferenceDeviceScreenSharingQuality';
import {TeleconferenceDeviceScreenSharingQuality} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeleconferenceDeviceScreenSharingQualityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeleconferenceDeviceScreenSharingQuality;
}
