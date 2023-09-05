import { createOutlookGeoCoordinatesFromDiscriminatorValue } from './createOutlookGeoCoordinatesFromDiscriminatorValue';
import { createPhysicalAddressFromDiscriminatorValue } from './createPhysicalAddressFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type OutlookGeoCoordinates } from './outlookGeoCoordinates';
import { type PhysicalAddress } from './physicalAddress';
import { type Place } from './place';
import { serializeOutlookGeoCoordinates } from './serializeOutlookGeoCoordinates';
import { serializePhysicalAddress } from './serializePhysicalAddress';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPlace(place: Place | undefined = {} as Place) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(place),
        "address": n => { place.address = n.getObjectValue<PhysicalAddress>(createPhysicalAddressFromDiscriminatorValue); },
        "displayName": n => { place.displayName = n.getStringValue(); },
        "geoCoordinates": n => { place.geoCoordinates = n.getObjectValue<OutlookGeoCoordinates>(createOutlookGeoCoordinatesFromDiscriminatorValue); },
        "phone": n => { place.phone = n.getStringValue(); },
    }
}
