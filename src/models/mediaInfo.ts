import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MediaInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Optional. Used to uniquely identity the resource. If passed in, the prompt uri will be cached against this resourceId as a key.
     */
    resourceId?: string | undefined;
    /**
     * Path to the prompt that will be played. Currently supports only Wave file (.wav) format, single-channel, 16-bit samples with a 16,000 (16KHz) sampling rate.
     */
    uri?: string | undefined;
}
