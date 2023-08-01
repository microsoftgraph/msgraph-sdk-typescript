import {deserializeIntoTeleconferenceDeviceMediaQuality} from './deserializeIntoTeleconferenceDeviceMediaQuality';
import type {TeleconferenceDeviceAudioQuality} from './teleconferenceDeviceAudioQuality';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeleconferenceDeviceAudioQuality(teleconferenceDeviceAudioQuality: TeleconferenceDeviceAudioQuality | undefined = {} as TeleconferenceDeviceAudioQuality) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeleconferenceDeviceMediaQuality(teleconferenceDeviceAudioQuality),
    }
}
