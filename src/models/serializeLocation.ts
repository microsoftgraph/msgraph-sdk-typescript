import {Location} from './location';
import {LocationType} from './locationType';
import {LocationUniqueIdType} from './locationUniqueIdType';
import {OutlookGeoCoordinates} from './outlookGeoCoordinates';
import {PhysicalAddress} from './physicalAddress';
import {serializeOutlookGeoCoordinates} from './serializeOutlookGeoCoordinates';
import {serializePhysicalAddress} from './serializePhysicalAddress';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLocation(writer: SerializationWriter, location: Location | undefined = {} as Location) : void {
        writer.writeObjectValue<PhysicalAddress>("address", location.address, serializePhysicalAddress);
        writer.writeObjectValue<OutlookGeoCoordinates>("coordinates", location.coordinates, serializeOutlookGeoCoordinates);
        writer.writeStringValue("displayName", location.displayName);
        writer.writeStringValue("locationEmailAddress", location.locationEmailAddress);
        writer.writeEnumValue<LocationType>("locationType", location.locationType);
        writer.writeStringValue("locationUri", location.locationUri);
        writer.writeStringValue("@odata.type", location.odataType);
        writer.writeStringValue("uniqueId", location.uniqueId);
        writer.writeEnumValue<LocationUniqueIdType>("uniqueIdType", location.uniqueIdType);
        writer.writeAdditionalData(location.additionalData);
}
