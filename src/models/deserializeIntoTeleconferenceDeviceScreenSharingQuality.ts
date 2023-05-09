import {deserializeIntoTeleconferenceDeviceVideoQuality} from './deserializeIntoTeleconferenceDeviceVideoQuality';
import {TeleconferenceDeviceScreenSharingQuality} from './teleconferenceDeviceScreenSharingQuality';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeleconferenceDeviceScreenSharingQuality(teleconferenceDeviceScreenSharingQuality: TeleconferenceDeviceScreenSharingQuality | undefined = {} as TeleconferenceDeviceScreenSharingQuality) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeleconferenceDeviceVideoQuality(teleconferenceDeviceScreenSharingQuality),
    }
}
