import {DeviceActionResult} from './deviceActionResult';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RemoteLockActionResult extends DeviceActionResult, Parsable {
    /**
     * Pin to unlock the client
     */
    unlockPin?: string | undefined;
}
