import {Entity} from './entity';
import {MobileThreatPartnerTenantState} from './mobileThreatPartnerTenantState';

export interface MobileThreatDefenseConnector extends Entity{
    /** For Android, set whether Intune must receive data from the data sync partner prior to marking a device compliant */
    androidDeviceBlockedOnMissingPartnerData?:boolean | undefined;
    /** For Android, set whether data from the data sync partner should be used during compliance evaluations */
    androidEnabled?:boolean | undefined;
    /** For IOS, set whether Intune must receive data from the data sync partner prior to marking a device compliant */
    iosDeviceBlockedOnMissingPartnerData?:boolean | undefined;
    /** For IOS, get or set whether data from the data sync partner should be used during compliance evaluations */
    iosEnabled?:boolean | undefined;
    /** DateTime of last Heartbeat recieved from the Data Sync Partner */
    lastHeartbeatDateTime?:Date | undefined;
    /** Data Sync Partner state for this account. Possible values are: unavailable, available, enabled, unresponsive. */
    partnerState?:MobileThreatPartnerTenantState | undefined;
    /** Get or Set days the per tenant tolerance to unresponsiveness for this partner integration */
    partnerUnresponsivenessThresholdInDays?:number | undefined;
    /** Get or set whether to block devices on the enabled platforms that do not meet the minimum version requirements of the Data Sync Partner */
    partnerUnsupportedOsVersionBlocked?:boolean | undefined;
}
