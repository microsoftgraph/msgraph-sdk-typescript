import type {DeviceGeoLocation} from './deviceGeoLocation';
import type {LocateDeviceActionResult} from './locateDeviceActionResult';
import {serializeDeviceActionResult} from './serializeDeviceActionResult';
import {serializeDeviceGeoLocation} from './serializeDeviceGeoLocation';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLocateDeviceActionResult(writer: SerializationWriter, locateDeviceActionResult: LocateDeviceActionResult | undefined = {} as LocateDeviceActionResult) : void {
        serializeDeviceActionResult(writer, locateDeviceActionResult)
        writer.writeObjectValue<DeviceGeoLocation>("deviceLocation", locateDeviceActionResult.deviceLocation, serializeDeviceGeoLocation);
}
