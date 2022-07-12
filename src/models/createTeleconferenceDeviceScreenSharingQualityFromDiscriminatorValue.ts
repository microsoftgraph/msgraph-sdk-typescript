import {TeleconferenceDeviceScreenSharingQuality} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeleconferenceDeviceScreenSharingQualityFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeleconferenceDeviceScreenSharingQuality {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeleconferenceDeviceScreenSharingQuality();
}
