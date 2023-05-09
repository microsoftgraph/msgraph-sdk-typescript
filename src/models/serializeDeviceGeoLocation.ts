import {DeviceGeoLocation} from './deviceGeoLocation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceGeoLocation(writer: SerializationWriter, deviceGeoLocation: DeviceGeoLocation | undefined = {} as DeviceGeoLocation) : void {
        writer.writeNumberValue("altitude", deviceGeoLocation.altitude);
        writer.writeNumberValue("heading", deviceGeoLocation.heading);
        writer.writeNumberValue("horizontalAccuracy", deviceGeoLocation.horizontalAccuracy);
        writer.writeDateValue("lastCollectedDateTime", deviceGeoLocation.lastCollectedDateTime);
        writer.writeNumberValue("latitude", deviceGeoLocation.latitude);
        writer.writeNumberValue("longitude", deviceGeoLocation.longitude);
        writer.writeStringValue("@odata.type", deviceGeoLocation.odataType);
        writer.writeNumberValue("speed", deviceGeoLocation.speed);
        writer.writeNumberValue("verticalAccuracy", deviceGeoLocation.verticalAccuracy);
        writer.writeAdditionalData(deviceGeoLocation.additionalData);
}
