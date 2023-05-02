import {WindowsDeviceAccount} from './windowsDeviceAccount';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsDeviceAzureADAccount extends Parsable, WindowsDeviceAccount {
    /** Not yet documented */
    userPrincipalName?: string | undefined;
}
