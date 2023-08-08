import type {DeviceActionResult} from './deviceActionResult';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ResetPasscodeActionResult extends DeviceActionResult, Parsable {
    /**
     * Newly generated passcode for the device
     */
    passcode?: string | undefined;
}
