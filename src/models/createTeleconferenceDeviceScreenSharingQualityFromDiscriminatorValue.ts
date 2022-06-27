import {TeleconferenceDeviceScreenSharingQualityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeleconferenceDeviceScreenSharingQualityFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeleconferenceDeviceScreenSharingQualityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeleconferenceDeviceScreenSharingQualityImpl();
}
