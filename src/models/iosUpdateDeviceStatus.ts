import {ComplianceStatus} from './complianceStatus';
import {Entity} from './entity';
import {IosUpdatesInstallStatus} from './iosUpdatesInstallStatus';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IosUpdateDeviceStatus extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The DateTime when device compliance grace period expires */
    complianceGracePeriodExpirationDateTime?: Date | undefined;
    /** Device name of the DevicePolicyStatus. */
    deviceDisplayName?: string | undefined;
    /** The device id that is being reported. */
    deviceId?: string | undefined;
    /** The device model that is being reported */
    deviceModel?: string | undefined;
    /** The installation status of the policy report. Possible values are: success, available, idle, unknown, mdmClientCrashed, timeout, downloading, downloadFailed, downloadRequiresComputer, downloadInsufficientSpace, downloadInsufficientPower, downloadInsufficientNetwork, installing, installInsufficientSpace, installInsufficientPower, installPhoneCallInProgress, installFailed, notSupportedOperation, sharedDeviceUserLoggedInError, updateError, deviceOsHigherThanDesiredOsVersion, updateScanFailed. */
    installStatus?: IosUpdatesInstallStatus | undefined;
    /** Last modified date time of the policy report. */
    lastReportedDateTime?: Date | undefined;
    /** The device version that is being reported. */
    osVersion?: string | undefined;
    /** Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned. */
    status?: ComplianceStatus | undefined;
    /** The User id that is being reported. */
    userId?: string | undefined;
    /** The User Name that is being reported */
    userName?: string | undefined;
    /** UserPrincipalName. */
    userPrincipalName?: string | undefined;
}
