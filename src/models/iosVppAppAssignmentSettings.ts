import {MobileAppAssignmentSettings} from './mobileAppAssignmentSettings';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosVppAppAssignmentSettings extends MobileAppAssignmentSettings, Parsable {
    /**
     * Whether or not to use device licensing.
     */
    useDeviceLicensing?: boolean | undefined;
    /**
     * The VPN Configuration Id to apply for this app.
     */
    vpnConfigurationId?: string | undefined;
}
