import type {DeviceActionResult} from './deviceActionResult';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface RemoteLockActionResult extends DeviceActionResult, Parsable {
    /**
     * Pin to unlock the client
     */
    unlockPin?: string | undefined;
}
