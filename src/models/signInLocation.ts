import { type GeoCoordinates } from './geoCoordinates';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface SignInLocation extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Provides the city where the sign-in originated and is determined using latitude/longitude information from the sign-in activity.
     */
    city?: string | undefined;
    /**
     * Provides the country code info (two letter code) where the sign-in originated.  This is calculated using latitude/longitude information from the sign-in activity.
     */
    countryOrRegion?: string | undefined;
    /**
     * Provides the latitude, longitude and altitude where the sign-in originated.
     */
    geoCoordinates?: GeoCoordinates | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Provides the State where the sign-in originated. This is calculated using latitude/longitude information from the sign-in activity.
     */
    state?: string | undefined;
}
