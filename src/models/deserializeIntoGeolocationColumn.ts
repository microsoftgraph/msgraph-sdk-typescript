import {GeolocationColumn} from './geolocationColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGeolocationColumn(geolocationColumn: GeolocationColumn | undefined = {} as GeolocationColumn) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { geolocationColumn.odataType = n.getStringValue(); },
    }
}
