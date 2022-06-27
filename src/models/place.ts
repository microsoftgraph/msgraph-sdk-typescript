import {Entity} from './entity';
import {OutlookGeoCoordinates} from './outlookGeoCoordinates';
import {PhysicalAddress} from './physicalAddress';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Place extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The street address of the place. */
    address?: PhysicalAddress | undefined;
    /** The name associated with the place. */
    displayName?: string | undefined;
    /** Specifies the place location in latitude, longitude and (optionally) altitude coordinates. */
    geoCoordinates?: OutlookGeoCoordinates | undefined;
    /** The phone number of the place. */
    phone?: string | undefined;
}
