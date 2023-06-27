import {MobileAppAssignmentSettings} from './mobileAppAssignmentSettings';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosStoreAppAssignmentSettings extends MobileAppAssignmentSettings, Parsable {
    /**
     * The VPN Configuration Id to apply for this app.
     */
    vpnConfigurationId?: string | undefined;
}
