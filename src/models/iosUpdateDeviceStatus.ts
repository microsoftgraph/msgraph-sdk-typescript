import {ComplianceStatus} from './complianceStatus';
import {Entity} from './entity';
import {IosUpdatesInstallStatus} from './iosUpdatesInstallStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosUpdateDeviceStatus extends Entity, Parsable {
    /**
     * The DateTime when device compliance grace period expires
     */
    complianceGracePeriodExpirationDateTime?: Date | undefined;
    /**
     * Device name of the DevicePolicyStatus.
     */
    deviceDisplayName?: string | undefined;
    /**
     * The device id that is being reported.
     */
    deviceId?: string | undefined;
    /**
     * The device model that is being reported
     */
    deviceModel?: string | undefined;
    /**
     * The installStatus property
     */
    installStatus?: IosUpdatesInstallStatus | undefined;
    /**
     * Last modified date time of the policy report.
     */
    lastReportedDateTime?: Date | undefined;
    /**
     * The device version that is being reported.
     */
    osVersion?: string | undefined;
    /**
     * The status property
     */
    status?: ComplianceStatus | undefined;
    /**
     * The User id that is being reported.
     */
    userId?: string | undefined;
    /**
     * The User Name that is being reported
     */
    userName?: string | undefined;
    /**
     * UserPrincipalName.
     */
    userPrincipalName?: string | undefined;
}
