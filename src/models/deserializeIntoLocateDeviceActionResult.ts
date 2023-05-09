import {createDeviceGeoLocationFromDiscriminatorValue} from './createDeviceGeoLocationFromDiscriminatorValue';
import {deserializeIntoDeviceActionResult} from './deserializeIntoDeviceActionResult';
import {DeviceGeoLocation} from './deviceGeoLocation';
import {LocateDeviceActionResult} from './locateDeviceActionResult';
import {serializeDeviceGeoLocation} from './serializeDeviceGeoLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocateDeviceActionResult(locateDeviceActionResult: LocateDeviceActionResult | undefined = {} as LocateDeviceActionResult) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceActionResult(locateDeviceActionResult),
        "deviceLocation": n => { locateDeviceActionResult.deviceLocation = n.getObjectValue<DeviceGeoLocation>(createDeviceGeoLocationFromDiscriminatorValue); },
    }
}
