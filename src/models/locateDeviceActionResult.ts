import { type DeviceActionResult } from './deviceActionResult';
import { type DeviceGeoLocation } from './deviceGeoLocation';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface LocateDeviceActionResult extends DeviceActionResult, Parsable {
    /**
     * device location
     */
    deviceLocation?: DeviceGeoLocation | undefined;
}
