import {DeviceActionResult} from './deviceActionResult';
import {DeviceGeoLocation} from './deviceGeoLocation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LocateDeviceActionResult extends DeviceActionResult, Parsable {
    /**
     * device location
     */
    deviceLocation?: DeviceGeoLocation | undefined;
}
