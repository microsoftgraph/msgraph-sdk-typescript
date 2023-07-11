import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IntelligenceProfileCountryOrRegionOfOrigin extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * A codified representation for this country/region of origin.
     */
    code?: string | undefined;
    /**
     * A display label for this ountry/region of origin.
     */
    label?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
