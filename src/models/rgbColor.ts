import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RgbColor extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Blue value
     */
    b?: number | undefined;
    /**
     * Green value
     */
    g?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Red value
     */
    r?: number | undefined;
}
