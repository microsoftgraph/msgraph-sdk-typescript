import {createOutlookGeoCoordinatesFromDiscriminatorValue} from './createOutlookGeoCoordinatesFromDiscriminatorValue';
import {createPhysicalAddressFromDiscriminatorValue} from './createPhysicalAddressFromDiscriminatorValue';
import type {Location} from './location';
import {LocationType} from './locationType';
import {LocationUniqueIdType} from './locationUniqueIdType';
import type {OutlookGeoCoordinates} from './outlookGeoCoordinates';
import type {PhysicalAddress} from './physicalAddress';
import {serializeOutlookGeoCoordinates} from './serializeOutlookGeoCoordinates';
import {serializePhysicalAddress} from './serializePhysicalAddress';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocation(location: Location | undefined = {} as Location) : Record<string, (node: ParseNode) => void> {
    return {
        "address": n => { location.address = n.getObjectValue<PhysicalAddress>(createPhysicalAddressFromDiscriminatorValue); },
        "coordinates": n => { location.coordinates = n.getObjectValue<OutlookGeoCoordinates>(createOutlookGeoCoordinatesFromDiscriminatorValue); },
        "displayName": n => { location.displayName = n.getStringValue(); },
        "locationEmailAddress": n => { location.locationEmailAddress = n.getStringValue(); },
        "locationType": n => { location.locationType = n.getEnumValue<LocationType>(LocationType); },
        "locationUri": n => { location.locationUri = n.getStringValue(); },
        "@odata.type": n => { location.odataType = n.getStringValue(); },
        "uniqueId": n => { location.uniqueId = n.getStringValue(); },
        "uniqueIdType": n => { location.uniqueIdType = n.getEnumValue<LocationUniqueIdType>(LocationUniqueIdType); },
    }
}
