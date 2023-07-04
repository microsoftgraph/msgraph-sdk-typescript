import {ComplianceStatus} from './complianceStatus';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceComplianceUserStatus extends Entity, Parsable {
    /**
     * Devices count for that user.
     */
    devicesCount?: number | undefined;
    /**
     * Last modified date time of the policy report.
     */
    lastReportedDateTime?: Date | undefined;
    /**
     * The status property
     */
    status?: ComplianceStatus | undefined;
    /**
     * User name of the DevicePolicyStatus.
     */
    userDisplayName?: string | undefined;
    /**
     * UserPrincipalName.
     */
    userPrincipalName?: string | undefined;
}
