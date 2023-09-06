import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface AlteredQueryToken extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Defines the length of a changed segment.
     */
    length?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Defines the offset of a changed segment.
     */
    offset?: number | undefined;
    /**
     * Represents the corrected segment string.
     */
    suggestion?: string | undefined;
}
