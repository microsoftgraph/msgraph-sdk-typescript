import {TeleconferenceDeviceMediaQuality} from './teleconferenceDeviceMediaQuality';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeleconferenceDeviceVideoQuality extends Partial<AdditionalDataHolder>, Partial<Parsable>, TeleconferenceDeviceMediaQuality {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The average inbound stream video bit rate per second. */
    averageInboundBitRate?: number | undefined;
    /** The average inbound stream video frame rate per second. */
    averageInboundFrameRate?: number | undefined;
    /** The average outbound stream video bit rate per second. */
    averageOutboundBitRate?: number | undefined;
    /** The average outbound stream video frame rate per second. */
    averageOutboundFrameRate?: number | undefined;
}
