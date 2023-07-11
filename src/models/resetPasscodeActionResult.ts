import {DeviceActionResult} from './deviceActionResult';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ResetPasscodeActionResult extends DeviceActionResult, Parsable {
    /**
     * Newly generated passcode for the device
     */
    passcode?: string | undefined;
}
