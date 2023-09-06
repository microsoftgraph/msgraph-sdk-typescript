import { type GeolocationColumn } from './geolocationColumn';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGeolocationColumn(geolocationColumn: GeolocationColumn | undefined = {} as GeolocationColumn) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { geolocationColumn.odataType = n.getStringValue(); },
    }
}
