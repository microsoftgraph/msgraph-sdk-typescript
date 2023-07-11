import {ComplianceState} from './complianceState';
import {ConfigurationManagerClientEnabledFeatures} from './configurationManagerClientEnabledFeatures';
import {DeviceActionResult} from './deviceActionResult';
import {DeviceCategory} from './deviceCategory';
import {DeviceCompliancePolicyState} from './deviceCompliancePolicyState';
import {DeviceConfigurationState} from './deviceConfigurationState';
import {DeviceEnrollmentType} from './deviceEnrollmentType';
import {DeviceHealthAttestationState} from './deviceHealthAttestationState';
import {DeviceLogCollectionResponse} from './deviceLogCollectionResponse';
import {DeviceManagementExchangeAccessState} from './deviceManagementExchangeAccessState';
import {DeviceManagementExchangeAccessStateReason} from './deviceManagementExchangeAccessStateReason';
import {DeviceRegistrationState} from './deviceRegistrationState';
import {Entity} from './entity';
import {ManagedDeviceOwnerType} from './managedDeviceOwnerType';
import {ManagedDevicePartnerReportedHealthState} from './managedDevicePartnerReportedHealthState';
import {ManagementAgentType} from './managementAgentType';
import {User} from './user';
import {WindowsProtectionState} from './windowsProtectionState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedDevice extends Entity, Parsable {
    /**
     * The code that allows the Activation Lock on managed device to be bypassed. Default, is Null (Non-Default property) for this property when returned as part of managedDevice entity in LIST call. To retrieve actual values GET call needs to be made, with device id and included in select parameter. Supports: $select. $Search is not supported. Read-only. This property is read-only.
     */
    activationLockBypassCode?: string | undefined;
    /**
     * Android security patch level. This property is read-only.
     */
    androidSecurityPatchLevel?: string | undefined;
    /**
     * The unique identifier for the Azure Active Directory device. Read only. This property is read-only.
     */
    azureADDeviceId?: string | undefined;
    /**
     * Whether the device is Azure Active Directory registered. This property is read-only.
     */
    azureADRegistered?: boolean | undefined;
    /**
     * The DateTime when device compliance grace period expires. This property is read-only.
     */
    complianceGracePeriodExpirationDateTime?: Date | undefined;
    /**
     * Compliance state.
     */
    complianceState?: ComplianceState | undefined;
    /**
     * ConfigrMgr client enabled features. This property is read-only.
     */
    configurationManagerClientEnabledFeatures?: ConfigurationManagerClientEnabledFeatures | undefined;
    /**
     * List of ComplexType deviceActionResult objects. This property is read-only.
     */
    deviceActionResults?: DeviceActionResult[] | undefined;
    /**
     * Device category
     */
    deviceCategory?: DeviceCategory | undefined;
    /**
     * Device category display name. Default is an empty string. Supports $filter operator 'eq' and 'or'. This property is read-only.
     */
    deviceCategoryDisplayName?: string | undefined;
    /**
     * Device compliance policy states for this device.
     */
    deviceCompliancePolicyStates?: DeviceCompliancePolicyState[] | undefined;
    /**
     * Device configuration states for this device.
     */
    deviceConfigurationStates?: DeviceConfigurationState[] | undefined;
    /**
     * Possible ways of adding a mobile device to management.
     */
    deviceEnrollmentType?: DeviceEnrollmentType | undefined;
    /**
     * The device health attestation state. This property is read-only.
     */
    deviceHealthAttestationState?: DeviceHealthAttestationState | undefined;
    /**
     * Name of the device. This property is read-only.
     */
    deviceName?: string | undefined;
    /**
     * Device registration status.
     */
    deviceRegistrationState?: DeviceRegistrationState | undefined;
    /**
     * Whether the device is Exchange ActiveSync activated. This property is read-only.
     */
    easActivated?: boolean | undefined;
    /**
     * Exchange ActivationSync activation time of the device. This property is read-only.
     */
    easActivationDateTime?: Date | undefined;
    /**
     * Exchange ActiveSync Id of the device. This property is read-only.
     */
    easDeviceId?: string | undefined;
    /**
     * Email(s) for the user associated with the device. This property is read-only.
     */
    emailAddress?: string | undefined;
    /**
     * Enrollment time of the device. Supports $filter operator 'lt' and 'gt'. This property is read-only.
     */
    enrolledDateTime?: Date | undefined;
    /**
     * Indicates Ethernet MAC Address of the device. Default, is Null (Non-Default property) for this property when returned as part of managedDevice entity. Individual get call with select query options is needed to retrieve actual values. Example: deviceManagement/managedDevices({managedDeviceId})?$select=ethernetMacAddress Supports: $select. $Search is not supported. Read-only. This property is read-only.
     */
    ethernetMacAddress?: string | undefined;
    /**
     * Device Exchange Access State.
     */
    exchangeAccessState?: DeviceManagementExchangeAccessState | undefined;
    /**
     * Device Exchange Access State Reason.
     */
    exchangeAccessStateReason?: DeviceManagementExchangeAccessStateReason | undefined;
    /**
     * Last time the device contacted Exchange. This property is read-only.
     */
    exchangeLastSuccessfulSyncDateTime?: Date | undefined;
    /**
     * Free Storage in Bytes. Default value is 0. Read-only. This property is read-only.
     */
    freeStorageSpaceInBytes?: number | undefined;
    /**
     * Integrated Circuit Card Identifier, it is A SIM card's unique identification number. Default is an empty string. To retrieve actual values GET call needs to be made, with device id and included in select parameter. Supports: $select. $Search is not supported. Read-only. This property is read-only.
     */
    iccid?: string | undefined;
    /**
     * IMEI. This property is read-only.
     */
    imei?: string | undefined;
    /**
     * Device encryption status. This property is read-only.
     */
    isEncrypted?: boolean | undefined;
    /**
     * Device supervised status. This property is read-only.
     */
    isSupervised?: boolean | undefined;
    /**
     * Whether the device is jail broken or rooted. Default is an empty string. Supports $filter operator 'eq' and 'or'. This property is read-only.
     */
    jailBroken?: string | undefined;
    /**
     * The date and time that the device last completed a successful sync with Intune. Supports $filter operator 'lt' and 'gt'. This property is read-only.
     */
    lastSyncDateTime?: Date | undefined;
    /**
     * List of log collection requests
     */
    logCollectionRequests?: DeviceLogCollectionResponse[] | undefined;
    /**
     * Automatically generated name to identify a device. Can be overwritten to a user friendly name.
     */
    managedDeviceName?: string | undefined;
    /**
     * Owner type of device.
     */
    managedDeviceOwnerType?: ManagedDeviceOwnerType | undefined;
    /**
     * The managementAgent property
     */
    managementAgent?: ManagementAgentType | undefined;
    /**
     * Reports device management certificate expiration date. This property is read-only.
     */
    managementCertificateExpirationDate?: Date | undefined;
    /**
     * Manufacturer of the device. This property is read-only.
     */
    manufacturer?: string | undefined;
    /**
     * MEID. This property is read-only.
     */
    meid?: string | undefined;
    /**
     * Model of the device. This property is read-only.
     */
    model?: string | undefined;
    /**
     * Notes on the device created by IT Admin. Default is null. To retrieve actual values GET call needs to be made, with device id and included in select parameter. Supports: $select. $Search is not supported.
     */
    notes?: string | undefined;
    /**
     * Operating system of the device. Windows, iOS, etc. This property is read-only.
     */
    operatingSystem?: string | undefined;
    /**
     * Operating system version of the device. This property is read-only.
     */
    osVersion?: string | undefined;
    /**
     * Available health states for the Device Health API
     */
    partnerReportedThreatState?: ManagedDevicePartnerReportedHealthState | undefined;
    /**
     * Phone number of the device. This property is read-only.
     */
    phoneNumber?: string | undefined;
    /**
     * Total Memory in Bytes. Default is 0. To retrieve actual values GET call needs to be made, with device id and included in select parameter. Supports: $select. Read-only. This property is read-only.
     */
    physicalMemoryInBytes?: number | undefined;
    /**
     * An error string that identifies issues when creating Remote Assistance session objects. This property is read-only.
     */
    remoteAssistanceSessionErrorDetails?: string | undefined;
    /**
     * Url that allows a Remote Assistance session to be established with the device. Default is an empty string. To retrieve actual values GET call needs to be made, with device id and included in select parameter. This property is read-only.
     */
    remoteAssistanceSessionUrl?: string | undefined;
    /**
     * Reports if the managed iOS device is user approval enrollment. This property is read-only.
     */
    requireUserEnrollmentApproval?: boolean | undefined;
    /**
     * SerialNumber. This property is read-only.
     */
    serialNumber?: string | undefined;
    /**
     * Subscriber Carrier. This property is read-only.
     */
    subscriberCarrier?: string | undefined;
    /**
     * Total Storage in Bytes. This property is read-only.
     */
    totalStorageSpaceInBytes?: number | undefined;
    /**
     * Unique Device Identifier for iOS and macOS devices. Default is an empty string. To retrieve actual values GET call needs to be made, with device id and included in select parameter. Supports: $select. $Search is not supported. Read-only. This property is read-only.
     */
    udid?: string | undefined;
    /**
     * User display name. This property is read-only.
     */
    userDisplayName?: string | undefined;
    /**
     * Unique Identifier for the user associated with the device. This property is read-only.
     */
    userId?: string | undefined;
    /**
     * Device user principal name. This property is read-only.
     */
    userPrincipalName?: string | undefined;
    /**
     * The primary users associated with the managed device.
     */
    users?: User[] | undefined;
    /**
     * Wi-Fi MAC. This property is read-only.
     */
    wiFiMacAddress?: string | undefined;
    /**
     * The device protection status. This property is read-only.
     */
    windowsProtectionState?: WindowsProtectionState | undefined;
}
