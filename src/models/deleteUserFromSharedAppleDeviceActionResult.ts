import {DeviceActionResult} from './deviceActionResult';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeleteUserFromSharedAppleDeviceActionResult extends DeviceActionResult, Parsable {
    /**
     * User principal name of the user to be deleted
     */
    userPrincipalName?: string | undefined;
}
