import {serializeTeleconferenceDeviceVideoQuality} from './serializeTeleconferenceDeviceVideoQuality';
import type {TeleconferenceDeviceScreenSharingQuality} from './teleconferenceDeviceScreenSharingQuality';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeleconferenceDeviceScreenSharingQuality(writer: SerializationWriter, teleconferenceDeviceScreenSharingQuality: TeleconferenceDeviceScreenSharingQuality | undefined = {} as TeleconferenceDeviceScreenSharingQuality) : void {
        serializeTeleconferenceDeviceVideoQuality(writer, teleconferenceDeviceScreenSharingQuality)
}
