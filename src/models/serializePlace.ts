import { type OutlookGeoCoordinates } from './outlookGeoCoordinates';
import { type PhysicalAddress } from './physicalAddress';
import { type Place } from './place';
import { serializeEntity } from './serializeEntity';
import { serializeOutlookGeoCoordinates } from './serializeOutlookGeoCoordinates';
import { serializePhysicalAddress } from './serializePhysicalAddress';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePlace(writer: SerializationWriter, place: Place | undefined = {} as Place) : void {
        serializeEntity(writer, place)
        writer.writeObjectValue<PhysicalAddress>("address", place.address, serializePhysicalAddress);
        writer.writeStringValue("displayName", place.displayName);
        writer.writeObjectValue<OutlookGeoCoordinates>("geoCoordinates", place.geoCoordinates, serializeOutlookGeoCoordinates);
        writer.writeStringValue("phone", place.phone);
}
