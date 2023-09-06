import { type GeoCoordinates } from './geoCoordinates';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGeoCoordinates(writer: SerializationWriter, geoCoordinates: GeoCoordinates | undefined = {} as GeoCoordinates) : void {
        writer.writeNumberValue("altitude", geoCoordinates.altitude);
        writer.writeNumberValue("latitude", geoCoordinates.latitude);
        writer.writeNumberValue("longitude", geoCoordinates.longitude);
        writer.writeStringValue("@odata.type", geoCoordinates.odataType);
        writer.writeAdditionalData(geoCoordinates.additionalData);
}
