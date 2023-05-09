import {GeoCoordinates} from './geoCoordinates';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGeoCoordinates(geoCoordinates: GeoCoordinates | undefined = {} as GeoCoordinates) : Record<string, (node: ParseNode) => void> {
    return {
        "altitude": n => { geoCoordinates.altitude = n.getNumberValue(); },
        "latitude": n => { geoCoordinates.latitude = n.getNumberValue(); },
        "longitude": n => { geoCoordinates.longitude = n.getNumberValue(); },
        "@odata.type": n => { geoCoordinates.odataType = n.getStringValue(); },
    }
}
