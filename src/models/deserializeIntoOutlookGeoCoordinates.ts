import {OutlookGeoCoordinates} from './outlookGeoCoordinates';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOutlookGeoCoordinates(outlookGeoCoordinates: OutlookGeoCoordinates | undefined = {} as OutlookGeoCoordinates) : Record<string, (node: ParseNode) => void> {
    return {
        "accuracy": n => { outlookGeoCoordinates.accuracy = n.getNumberValue(); },
        "altitude": n => { outlookGeoCoordinates.altitude = n.getNumberValue(); },
        "altitudeAccuracy": n => { outlookGeoCoordinates.altitudeAccuracy = n.getNumberValue(); },
        "latitude": n => { outlookGeoCoordinates.latitude = n.getNumberValue(); },
        "longitude": n => { outlookGeoCoordinates.longitude = n.getNumberValue(); },
        "@odata.type": n => { outlookGeoCoordinates.odataType = n.getStringValue(); },
    }
}
