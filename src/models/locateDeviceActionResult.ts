import {DeviceActionResult} from './deviceActionResult';
import {DeviceGeoLocation} from './deviceGeoLocation';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface LocateDeviceActionResult extends Partial<AdditionalDataHolder>, DeviceActionResult, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** device location */
    deviceLocation?: DeviceGeoLocation | undefined;
}
