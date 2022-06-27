import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MediaInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Optional, used to uniquely identity the resource. If passed the prompt uri will be cached against this resourceId as key. */
    resourceId?: string | undefined;
    /** Path to the prompt to be played. Currently only Wave file (.wav) format, single-channel, 16-bit samples with a 16,000 (16KHz) sampling rate is only supported. */
    uri?: string | undefined;
}
