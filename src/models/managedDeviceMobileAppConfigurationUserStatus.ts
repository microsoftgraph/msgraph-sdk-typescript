import {ComplianceStatus} from './complianceStatus';
import {Entity} from './entity';

export interface ManagedDeviceMobileAppConfigurationUserStatus extends Entity{
    /** Devices count for that user. */
    devicesCount?:number | undefined;
    /** Last modified date time of the policy report. */
    lastReportedDateTime?:Date | undefined;
    /** Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned. */
    status?:ComplianceStatus | undefined;
    /** User name of the DevicePolicyStatus. */
    userDisplayName?:string | undefined;
    /** UserPrincipalName. */
    userPrincipalName?:string | undefined;
}
