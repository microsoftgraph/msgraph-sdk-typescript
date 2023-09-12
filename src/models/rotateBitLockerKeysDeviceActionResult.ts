import { type DeviceActionResult } from './deviceActionResult';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface RotateBitLockerKeysDeviceActionResult extends DeviceActionResult, Parsable {
    /**
     * RotateBitLockerKeys action error code
     */
    errorCode?: number | undefined;
}
