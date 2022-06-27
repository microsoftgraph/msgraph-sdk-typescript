import {ComplianceStatus} from './complianceStatus';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedDeviceMobileAppConfigurationUserStatus extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Devices count for that user. */
    devicesCount?: number | undefined;
    /** Last modified date time of the policy report. */
    lastReportedDateTime?: Date | undefined;
    /** Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned. */
    status?: ComplianceStatus | undefined;
    /** User name of the DevicePolicyStatus. */
    userDisplayName?: string | undefined;
    /** UserPrincipalName. */
    userPrincipalName?: string | undefined;
}
