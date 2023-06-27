import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WatermarkProtectionValues extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Indicates whether to apply a watermark to any shared content.
     */
    isEnabledForContentSharing?: boolean | undefined;
    /**
     * Indicates whether to apply a watermark to everyone's video feed.
     */
    isEnabledForVideo?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
