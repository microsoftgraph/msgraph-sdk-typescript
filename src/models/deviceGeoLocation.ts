import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceGeoLocation extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Altitude, given in meters above sea level
     */
    altitude?: number | undefined;
    /**
     * Heading in degrees from true north
     */
    heading?: number | undefined;
    /**
     * Accuracy of longitude and latitude in meters
     */
    horizontalAccuracy?: number | undefined;
    /**
     * Time at which location was recorded, relative to UTC
     */
    lastCollectedDateTime?: Date | undefined;
    /**
     * Latitude coordinate of the device's location
     */
    latitude?: number | undefined;
    /**
     * Longitude coordinate of the device's location
     */
    longitude?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Speed the device is traveling in meters per second
     */
    speed?: number | undefined;
    /**
     * Accuracy of altitude in meters
     */
    verticalAccuracy?: number | undefined;
}
