import {TeleconferenceDeviceQuality} from '../../../models/teleconferenceDeviceQuality';

export interface LogTeleconferenceDeviceQualityPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The quality property */
    quality?:TeleconferenceDeviceQuality | undefined;
}
