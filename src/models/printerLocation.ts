import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrinterLocation extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The altitude, in meters, that the printer is located at.
     */
    altitudeInMeters?: number | undefined;
    /**
     * The building that the printer is located in.
     */
    building?: string | undefined;
    /**
     * The city that the printer is located in.
     */
    city?: string | undefined;
    /**
     * The country or region that the printer is located in.
     */
    countryOrRegion?: string | undefined;
    /**
     * The floor that the printer is located on. Only numerical values are supported right now.
     */
    floor?: string | undefined;
    /**
     * The description of the floor that the printer is located on.
     */
    floorDescription?: string | undefined;
    /**
     * The latitude that the printer is located at.
     */
    latitude?: number | undefined;
    /**
     * The longitude that the printer is located at.
     */
    longitude?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The organizational hierarchy that the printer belongs to. The elements should be in hierarchical order.
     */
    organization?: string[] | undefined;
    /**
     * The postal code that the printer is located in.
     */
    postalCode?: string | undefined;
    /**
     * The description of the room that the printer is located in.
     */
    roomDescription?: string | undefined;
    /**
     * The room that the printer is located in. Only numerical values are supported right now.
     */
    roomName?: string | undefined;
    /**
     * The site that the printer is located in.
     */
    site?: string | undefined;
    /**
     * The state or province that the printer is located in.
     */
    stateOrProvince?: string | undefined;
    /**
     * The street address where the printer is located.
     */
    streetAddress?: string | undefined;
    /**
     * The subdivision that the printer is located in. The elements should be in hierarchical order.
     */
    subdivision?: string[] | undefined;
    /**
     * The subunit property
     */
    subunit?: string[] | undefined;
}
