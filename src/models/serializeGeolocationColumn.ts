import { type GeolocationColumn } from './geolocationColumn';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGeolocationColumn(writer: SerializationWriter, geolocationColumn: GeolocationColumn | undefined = {} as GeolocationColumn) : void {
        writer.writeStringValue("@odata.type", geolocationColumn.odataType);
        writer.writeAdditionalData(geolocationColumn.additionalData);
}
