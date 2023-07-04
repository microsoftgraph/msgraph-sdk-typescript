import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PhysicalAddress extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The city.
     */
    city?: string | undefined;
    /**
     * The country or region. It's a free-format string value, for example, 'United States'.
     */
    countryOrRegion?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The postal code.
     */
    postalCode?: string | undefined;
    /**
     * The state.
     */
    state?: string | undefined;
    /**
     * The street.
     */
    street?: string | undefined;
}
