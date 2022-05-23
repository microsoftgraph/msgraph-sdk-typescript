import {LocationType} from './locationType';
import {LocationUniqueIdType} from './locationUniqueIdType';
import {OutlookGeoCoordinates} from './outlookGeoCoordinates';
import {PhysicalAddress} from './physicalAddress';

export interface Location{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The street address of the location. */
    address?:PhysicalAddress | undefined;
    /** The geographic coordinates and elevation of the location. */
    coordinates?:OutlookGeoCoordinates | undefined;
    /** The name associated with the location. */
    displayName?:string | undefined;
    /** Optional email address of the location. */
    locationEmailAddress?:string | undefined;
    /** The type of location. Possible values are: default, conferenceRoom, homeAddress, businessAddress,geoCoordinates, streetAddress, hotel, restaurant, localBusiness, postalAddress. Read-only. */
    locationType?:LocationType | undefined;
    /** Optional URI representing the location. */
    locationUri?:string | undefined;
    /** For internal use only. */
    uniqueId?:string | undefined;
    /** For internal use only. */
    uniqueIdType?:LocationUniqueIdType | undefined;
}
