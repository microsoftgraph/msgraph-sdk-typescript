import {AlertEvidence} from './alertEvidence';
import {DefenderAvStatus} from './defenderAvStatus';
import {DeviceHealthStatus} from './deviceHealthStatus';
import {DeviceRiskScore} from './deviceRiskScore';
import {LoggedOnUser} from './loggedOnUser';
import {OnboardingStatus} from './onboardingStatus';
import {VmMetadata} from './vmMetadata';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceEvidence extends AlertEvidence, Parsable {
    /**
     * A unique identifier assigned to a device by Azure Active Directory (Azure AD) when device is Azure AD-joined.
     */
    azureAdDeviceId?: string | undefined;
    /**
     * State of the Defender AntiMalware engine. The possible values are: notReporting, disabled, notUpdated, updated, unknown, notSupported, unknownFutureValue.
     */
    defenderAvStatus?: DefenderAvStatus | undefined;
    /**
     * The fully qualified domain name (FQDN) for the device.
     */
    deviceDnsName?: string | undefined;
    /**
     * The date and time when the device was first seen.
     */
    firstSeenDateTime?: Date | undefined;
    /**
     * The health state of the device.The possible values are: active, inactive, impairedCommunication, noSensorData, noSensorDataImpairedCommunication, unknown, unknownFutureValue.
     */
    healthStatus?: DeviceHealthStatus | undefined;
    /**
     * The ipInterfaces property
     */
    ipInterfaces?: string[] | undefined;
    /**
     * Users that were logged on the machine during the time of the alert.
     */
    loggedOnUsers?: LoggedOnUser[] | undefined;
    /**
     * A unique identifier assigned to a device by Microsoft Defender for Endpoint.
     */
    mdeDeviceId?: string | undefined;
    /**
     * The status of the machine onboarding to Microsoft Defender for Endpoint.The possible values are: insufficientInfo, onboarded, canBeOnboarded, unsupported, unknownFutureValue.
     */
    onboardingStatus?: OnboardingStatus | undefined;
    /**
     * The build version for the operating system the device is running.
     */
    osBuild?: number | undefined;
    /**
     * The operating system platform the device is running.
     */
    osPlatform?: string | undefined;
    /**
     * The ID of the role-based access control (RBAC) device group.
     */
    rbacGroupId?: number | undefined;
    /**
     * The name of the RBAC device group.
     */
    rbacGroupName?: string | undefined;
    /**
     * Risk score as evaluated by Microsoft Defender for Endpoint. The possible values are: none, informational, low, medium, high, unknownFutureValue.
     */
    riskScore?: DeviceRiskScore | undefined;
    /**
     * The version of the operating system platform.
     */
    version?: string | undefined;
    /**
     * Metadata of the virtual machine (VM) on which Microsoft Defender for Endpoint is running.
     */
    vmMetadata?: VmMetadata | undefined;
}
