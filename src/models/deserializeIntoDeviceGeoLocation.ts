import { type DeviceGeoLocation } from './deviceGeoLocation';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceGeoLocation(deviceGeoLocation: DeviceGeoLocation | undefined = {} as DeviceGeoLocation) : Record<string, (node: ParseNode) => void> {
    return {
        "altitude": n => { deviceGeoLocation.altitude = n.getNumberValue(); },
        "heading": n => { deviceGeoLocation.heading = n.getNumberValue(); },
        "horizontalAccuracy": n => { deviceGeoLocation.horizontalAccuracy = n.getNumberValue(); },
        "lastCollectedDateTime": n => { deviceGeoLocation.lastCollectedDateTime = n.getDateValue(); },
        "latitude": n => { deviceGeoLocation.latitude = n.getNumberValue(); },
        "longitude": n => { deviceGeoLocation.longitude = n.getNumberValue(); },
        "@odata.type": n => { deviceGeoLocation.odataType = n.getStringValue(); },
        "speed": n => { deviceGeoLocation.speed = n.getNumberValue(); },
        "verticalAccuracy": n => { deviceGeoLocation.verticalAccuracy = n.getNumberValue(); },
    }
}
