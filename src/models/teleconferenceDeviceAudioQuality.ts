import {TeleconferenceDeviceMediaQuality} from './teleconferenceDeviceMediaQuality';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeleconferenceDeviceAudioQuality extends Partial<AdditionalDataHolder>, Partial<Parsable>, TeleconferenceDeviceMediaQuality {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
}
