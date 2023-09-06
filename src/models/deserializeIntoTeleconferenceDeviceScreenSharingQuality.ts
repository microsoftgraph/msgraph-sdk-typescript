import { deserializeIntoTeleconferenceDeviceVideoQuality } from './deserializeIntoTeleconferenceDeviceVideoQuality';
import { type TeleconferenceDeviceScreenSharingQuality } from './teleconferenceDeviceScreenSharingQuality';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeleconferenceDeviceScreenSharingQuality(teleconferenceDeviceScreenSharingQuality: TeleconferenceDeviceScreenSharingQuality | undefined = {} as TeleconferenceDeviceScreenSharingQuality) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeleconferenceDeviceVideoQuality(teleconferenceDeviceScreenSharingQuality),
    }
}
