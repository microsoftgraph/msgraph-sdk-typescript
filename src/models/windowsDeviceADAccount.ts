import type {WindowsDeviceAccount} from './windowsDeviceAccount';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsDeviceADAccount extends Parsable, WindowsDeviceAccount {
    /**
     * Not yet documented
     */
    domainName?: string | undefined;
    /**
     * Not yet documented
     */
    userName?: string | undefined;
}
