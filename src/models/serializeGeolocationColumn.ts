import {GeolocationColumn} from './geolocationColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGeolocationColumn(geolocationColumn: GeolocationColumn | undefined = {} as GeolocationColumn, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", geolocationColumn.odataType);
        writer.writeAdditionalData(geolocationColumn.additionalData);
}
