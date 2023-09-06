import { type WindowsDeviceAccount } from './windowsDeviceAccount';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface WindowsDeviceAzureADAccount extends Parsable, WindowsDeviceAccount {
    /**
     * Not yet documented
     */
    userPrincipalName?: string | undefined;
}
