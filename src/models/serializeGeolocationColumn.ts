import type {GeolocationColumn} from './geolocationColumn';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGeolocationColumn(writer: SerializationWriter, geolocationColumn: GeolocationColumn | undefined = {} as GeolocationColumn) : void {
        writer.writeStringValue("@odata.type", geolocationColumn.odataType);
        writer.writeAdditionalData(geolocationColumn.additionalData);
}
