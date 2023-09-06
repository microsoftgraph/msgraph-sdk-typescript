import { type MobileAppAssignmentSettings } from './mobileAppAssignmentSettings';
import { type Parsable } from '@microsoft/kiota-abstractions';

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
