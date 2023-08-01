import {createDeviceGeoLocationFromDiscriminatorValue} from './createDeviceGeoLocationFromDiscriminatorValue';
import {deserializeIntoDeviceActionResult} from './deserializeIntoDeviceActionResult';
import type {DeviceGeoLocation} from './deviceGeoLocation';
import type {LocateDeviceActionResult} from './locateDeviceActionResult';
import {serializeDeviceGeoLocation} from './serializeDeviceGeoLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocateDeviceActionResult(locateDeviceActionResult: LocateDeviceActionResult | undefined = {} as LocateDeviceActionResult) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceActionResult(locateDeviceActionResult),
        "deviceLocation": n => { locateDeviceActionResult.deviceLocation = n.getObjectValue<DeviceGeoLocation>(createDeviceGeoLocationFromDiscriminatorValue); },
    }
}
