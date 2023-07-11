import {ComplianceStatus} from './complianceStatus';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationDeviceStatus extends Entity, Parsable {
    /**
     * The DateTime when device compliance grace period expires
     */
    complianceGracePeriodExpirationDateTime?: Date | undefined;
    /**
     * Device name of the DevicePolicyStatus.
     */
    deviceDisplayName?: string | undefined;
    /**
     * The device model that is being reported
     */
    deviceModel?: string | undefined;
    /**
     * Last modified date time of the policy report.
     */
    lastReportedDateTime?: Date | undefined;
    /**
     * The status property
     */
    status?: ComplianceStatus | undefined;
    /**
     * The User Name that is being reported
     */
    userName?: string | undefined;
    /**
     * UserPrincipalName.
     */
    userPrincipalName?: string | undefined;
}
