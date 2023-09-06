import { type Entity } from './entity';
import { type OutlookGeoCoordinates } from './outlookGeoCoordinates';
import { type PhysicalAddress } from './physicalAddress';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface Place extends Entity, Parsable {
    /**
     * The street address of the place.
     */
    address?: PhysicalAddress | undefined;
    /**
     * The name associated with the place.
     */
    displayName?: string | undefined;
    /**
     * Specifies the place location in latitude, longitude and (optionally) altitude coordinates.
     */
    geoCoordinates?: OutlookGeoCoordinates | undefined;
    /**
     * The phone number of the place.
     */
    phone?: string | undefined;
}
