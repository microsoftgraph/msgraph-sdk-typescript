import {serializeTeleconferenceDeviceVideoQuality} from './serializeTeleconferenceDeviceVideoQuality';
import {TeleconferenceDeviceScreenSharingQuality} from './teleconferenceDeviceScreenSharingQuality';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeleconferenceDeviceScreenSharingQuality(writer: SerializationWriter, teleconferenceDeviceScreenSharingQuality: TeleconferenceDeviceScreenSharingQuality | undefined = {} as TeleconferenceDeviceScreenSharingQuality) : void {
        serializeTeleconferenceDeviceVideoQuality(writer, teleconferenceDeviceScreenSharingQuality)
}
