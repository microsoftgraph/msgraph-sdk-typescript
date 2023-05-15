import {DeviceGeoLocation} from './deviceGeoLocation';
import {LocateDeviceActionResult} from './locateDeviceActionResult';
import {serializeDeviceActionResult} from './serializeDeviceActionResult';
import {serializeDeviceGeoLocation} from './serializeDeviceGeoLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLocateDeviceActionResult(writer: SerializationWriter, locateDeviceActionResult: LocateDeviceActionResult | undefined = {} as LocateDeviceActionResult) : void {
        serializeDeviceActionResult(writer, locateDeviceActionResult)
        writer.writeObjectValue<DeviceGeoLocation>("deviceLocation", locateDeviceActionResult.deviceLocation, serializeDeviceGeoLocation);
}
