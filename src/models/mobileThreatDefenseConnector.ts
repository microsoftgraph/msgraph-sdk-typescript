import {Entity} from './entity';
import {MobileThreatPartnerTenantState} from './mobileThreatPartnerTenantState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileThreatDefenseConnector extends Entity, Parsable {
    /**
     * When TRUE, indicates the Mobile Threat Defense partner may collect metadata about installed applications from Intune for IOS devices. When FALSE, indicates the Mobile Threat Defense partner may not collect metadata about installed applications from Intune for IOS devices. Default value is FALSE.
     */
    allowPartnerToCollectIOSApplicationMetadata?: boolean | undefined;
    /**
     * When TRUE, indicates the Mobile Threat Defense partner may collect metadata about personally installed applications from Intune for IOS devices. When FALSE, indicates the Mobile Threat Defense partner may not collect metadata about personally installed applications from Intune for IOS devices. Default value is FALSE.
     */
    allowPartnerToCollectIOSPersonalApplicationMetadata?: boolean | undefined;
    /**
     * For Android, set whether Intune must receive data from the Mobile Threat Defense partner prior to marking a device compliant
     */
    androidDeviceBlockedOnMissingPartnerData?: boolean | undefined;
    /**
     * For Android, set whether data from the Mobile Threat Defense partner should be used during compliance evaluations
     */
    androidEnabled?: boolean | undefined;
    /**
     * When TRUE, inidicates that data from the Mobile Threat Defense partner can be used during Mobile Application Management (MAM) evaluations for Android devices. When FALSE, inidicates that data from the Mobile Threat Defense partner should not be used during Mobile Application Management (MAM) evaluations for Android devices. Only one partner per platform may be enabled for Mobile Application Management (MAM) evaluation. Default value is FALSE.
     */
    androidMobileApplicationManagementEnabled?: boolean | undefined;
    /**
     * For IOS, set whether Intune must receive data from the Mobile Threat Defense partner prior to marking a device compliant
     */
    iosDeviceBlockedOnMissingPartnerData?: boolean | undefined;
    /**
     * For IOS, get or set whether data from the Mobile Threat Defense partner should be used during compliance evaluations
     */
    iosEnabled?: boolean | undefined;
    /**
     * When TRUE, inidicates that data from the Mobile Threat Defense partner can be used during Mobile Application Management (MAM) evaluations for IOS devices. When FALSE, inidicates that data from the Mobile Threat Defense partner should not be used during Mobile Application Management (MAM) evaluations for IOS devices. Only one partner per platform may be enabled for Mobile Application Management (MAM) evaluation. Default value is FALSE.
     */
    iosMobileApplicationManagementEnabled?: boolean | undefined;
    /**
     * DateTime of last Heartbeat recieved from the Mobile Threat Defense partner
     */
    lastHeartbeatDateTime?: Date | undefined;
    /**
     * When TRUE, inidicates that configuration profile management via Microsoft Defender for Endpoint is enabled. When FALSE, inidicates that configuration profile management via Microsoft Defender for Endpoint is disabled. Default value is FALSE.
     */
    microsoftDefenderForEndpointAttachEnabled?: boolean | undefined;
    /**
     * Partner state of this tenant.
     */
    partnerState?: MobileThreatPartnerTenantState | undefined;
    /**
     * Get or Set days the per tenant tolerance to unresponsiveness for this partner integration
     */
    partnerUnresponsivenessThresholdInDays?: number | undefined;
    /**
     * Get or set whether to block devices on the enabled platforms that do not meet the minimum version requirements of the Mobile Threat Defense partner
     */
    partnerUnsupportedOsVersionBlocked?: boolean | undefined;
    /**
     * When TRUE, inidicates that Intune must receive data from the Mobile Threat Defense partner prior to marking a device compliant for Windows. When FALSE, inidicates that Intune may make a device compliant without receiving data from the Mobile Threat Defense partner for Windows. Default value is FALSE.
     */
    windowsDeviceBlockedOnMissingPartnerData?: boolean | undefined;
    /**
     * When TRUE, inidicates that data from the Mobile Threat Defense partner can be used during compliance evaluations for Windows. When FALSE, inidicates that data from the Mobile Threat Defense partner should not be used during compliance evaluations for Windows. Default value is FALSE.
     */
    windowsEnabled?: boolean | undefined;
}
