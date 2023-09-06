import { type TeleconferenceDeviceQuality } from '../../../models/teleconferenceDeviceQuality';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface LogTeleconferenceDeviceQualityPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The quality property
     */
    quality?: TeleconferenceDeviceQuality | undefined;
}
