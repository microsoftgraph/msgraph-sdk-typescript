import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OutlookGeoCoordinates extends AdditionalDataHolder, Parsable {
    /**
     * The accuracy of the latitude and longitude. As an example, the accuracy can be measured in meters, such as the latitude and longitude are accurate to within 50 meters.
     */
    accuracy?: number | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The altitude of the location.
     */
    altitude?: number | undefined;
    /**
     * The accuracy of the altitude.
     */
    altitudeAccuracy?: number | undefined;
    /**
     * The latitude of the location.
     */
    latitude?: number | undefined;
    /**
     * The longitude of the location.
     */
    longitude?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
