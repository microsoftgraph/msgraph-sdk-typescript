import {OutlookGeoCoordinates} from './outlookGeoCoordinates';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOutlookGeoCoordinates(writer: SerializationWriter, outlookGeoCoordinates: OutlookGeoCoordinates | undefined = {} as OutlookGeoCoordinates) : void {
        writer.writeNumberValue("accuracy", outlookGeoCoordinates.accuracy);
        writer.writeNumberValue("altitude", outlookGeoCoordinates.altitude);
        writer.writeNumberValue("altitudeAccuracy", outlookGeoCoordinates.altitudeAccuracy);
        writer.writeNumberValue("latitude", outlookGeoCoordinates.latitude);
        writer.writeNumberValue("longitude", outlookGeoCoordinates.longitude);
        writer.writeStringValue("@odata.type", outlookGeoCoordinates.odataType);
        writer.writeAdditionalData(outlookGeoCoordinates.additionalData);
}
