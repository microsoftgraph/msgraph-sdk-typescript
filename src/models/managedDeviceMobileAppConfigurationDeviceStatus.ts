import {ComplianceStatus} from './complianceStatus';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedDeviceMobileAppConfigurationDeviceStatus extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The DateTime when device compliance grace period expires */
    complianceGracePeriodExpirationDateTime?: Date | undefined;
    /** Device name of the DevicePolicyStatus. */
    deviceDisplayName?: string | undefined;
    /** The device model that is being reported */
    deviceModel?: string | undefined;
    /** Last modified date time of the policy report. */
    lastReportedDateTime?: Date | undefined;
    /** Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned. */
    status?: ComplianceStatus | undefined;
    /** The User Name that is being reported */
    userName?: string | undefined;
    /** UserPrincipalName. */
    userPrincipalName?: string | undefined;
}
