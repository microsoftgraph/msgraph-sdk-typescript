import {serializeTeleconferenceDeviceMediaQuality} from './serializeTeleconferenceDeviceMediaQuality';
import {TeleconferenceDeviceAudioQuality} from './teleconferenceDeviceAudioQuality';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeleconferenceDeviceAudioQuality(writer: SerializationWriter, teleconferenceDeviceAudioQuality: TeleconferenceDeviceAudioQuality | undefined = {} as TeleconferenceDeviceAudioQuality) : void {
        serializeTeleconferenceDeviceMediaQuality(writer, teleconferenceDeviceAudioQuality)
}
