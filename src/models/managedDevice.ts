import {ComplianceState} from './complianceState';
import {ConfigurationManagerClientEnabledFeatures} from './configurationManagerClientEnabledFeatures';
import {DeviceActionResult} from './deviceActionResult';
import {DeviceCategory} from './deviceCategory';
import {DeviceCompliancePolicyState} from './deviceCompliancePolicyState';
import {DeviceConfigurationState} from './deviceConfigurationState';
import {DeviceEnrollmentType} from './deviceEnrollmentType';
import {DeviceHealthAttestationState} from './deviceHealthAttestationState';
import {DeviceManagementExchangeAccessState} from './deviceManagementExchangeAccessState';
import {DeviceManagementExchangeAccessStateReason} from './deviceManagementExchangeAccessStateReason';
import {DeviceRegistrationState} from './deviceRegistrationState';
import {Entity} from './entity';
import {ManagedDeviceOwnerType} from './managedDeviceOwnerType';
import {ManagedDevicePartnerReportedHealthState} from './managedDevicePartnerReportedHealthState';
import {ManagementAgentType} from './managementAgentType';

export interface ManagedDevice extends Entity{
    /** Code that allows the Activation Lock on a device to be bypassed. This property is read-only. */
    activationLockBypassCode?:string | undefined;
    /** Android security patch level. This property is read-only. */
    androidSecurityPatchLevel?:string | undefined;
    /** The unique identifier for the Azure Active Directory device. Read only. This property is read-only. */
    azureADDeviceId?:string | undefined;
    /** Whether the device is Azure Active Directory registered. This property is read-only. */
    azureADRegistered?:boolean | undefined;
    /** The DateTime when device compliance grace period expires. This property is read-only. */
    complianceGracePeriodExpirationDateTime?:Date | undefined;
    /** Compliance state of the device. This property is read-only. Possible values are: unknown, compliant, noncompliant, conflict, error, inGracePeriod, configManager. */
    complianceState?:ComplianceState | undefined;
    /** ConfigrMgr client enabled features. This property is read-only. */
    configurationManagerClientEnabledFeatures?:ConfigurationManagerClientEnabledFeatures | undefined;
    /** List of ComplexType deviceActionResult objects. This property is read-only. */
    deviceActionResults?:DeviceActionResult[] | undefined;
    /** Device category */
    deviceCategory?:DeviceCategory | undefined;
    /** Device category display name. This property is read-only. */
    deviceCategoryDisplayName?:string | undefined;
    /** Device compliance policy states for this device. */
    deviceCompliancePolicyStates?:DeviceCompliancePolicyState[] | undefined;
    /** Device configuration states for this device. */
    deviceConfigurationStates?:DeviceConfigurationState[] | undefined;
    /** Enrollment type of the device. This property is read-only. Possible values are: unknown, userEnrollment, deviceEnrollmentManager, appleBulkWithUser, appleBulkWithoutUser, windowsAzureADJoin, windowsBulkUserless, windowsAutoEnrollment, windowsBulkAzureDomainJoin, windowsCoManagement, windowsAzureADJoinUsingDeviceAuth, appleUserEnrollment, appleUserEnrollmentWithServiceAccount, azureAdJoinUsingAzureVmExtension, androidEnterpriseDedicatedDevice, androidEnterpriseFullyManaged, androidEnterpriseCorporateWorkProfile. */
    deviceEnrollmentType?:DeviceEnrollmentType | undefined;
    /** The device health attestation state. This property is read-only. */
    deviceHealthAttestationState?:DeviceHealthAttestationState | undefined;
    /** Name of the device. This property is read-only. */
    deviceName?:string | undefined;
    /** Device registration state. This property is read-only. Possible values are: notRegistered, registered, revoked, keyConflict, approvalPending, certificateReset, notRegisteredPendingEnrollment, unknown. */
    deviceRegistrationState?:DeviceRegistrationState | undefined;
    /** Whether the device is Exchange ActiveSync activated. This property is read-only. */
    easActivated?:boolean | undefined;
    /** Exchange ActivationSync activation time of the device. This property is read-only. */
    easActivationDateTime?:Date | undefined;
    /** Exchange ActiveSync Id of the device. This property is read-only. */
    easDeviceId?:string | undefined;
    /** Email(s) for the user associated with the device. This property is read-only. */
    emailAddress?:string | undefined;
    /** Enrollment time of the device. This property is read-only. */
    enrolledDateTime?:Date | undefined;
    /** Ethernet MAC. This property is read-only. */
    ethernetMacAddress?:string | undefined;
    /** The Access State of the device in Exchange. This property is read-only. Possible values are: none, unknown, allowed, blocked, quarantined. */
    exchangeAccessState?:DeviceManagementExchangeAccessState | undefined;
    /** The reason for the device's access state in Exchange. This property is read-only. Possible values are: none, unknown, exchangeGlobalRule, exchangeIndividualRule, exchangeDeviceRule, exchangeUpgrade, exchangeMailboxPolicy, other, compliant, notCompliant, notEnrolled, unknownLocation, mfaRequired, azureADBlockDueToAccessPolicy, compromisedPassword, deviceNotKnownWithManagedApp. */
    exchangeAccessStateReason?:DeviceManagementExchangeAccessStateReason | undefined;
    /** Last time the device contacted Exchange. This property is read-only. */
    exchangeLastSuccessfulSyncDateTime?:Date | undefined;
    /** Free Storage in Bytes. This property is read-only. */
    freeStorageSpaceInBytes?:number | undefined;
    /** Integrated Circuit Card Identifier, it is A SIM card's unique identification number. This property is read-only. */
    iccid?:string | undefined;
    /** IMEI. This property is read-only. */
    imei?:string | undefined;
    /** Device encryption status. This property is read-only. */
    isEncrypted?:boolean | undefined;
    /** Device supervised status. This property is read-only. */
    isSupervised?:boolean | undefined;
    /** whether the device is jail broken or rooted. This property is read-only. */
    jailBroken?:string | undefined;
    /** The date and time that the device last completed a successful sync with Intune. This property is read-only. */
    lastSyncDateTime?:Date | undefined;
    /** Automatically generated name to identify a device. Can be overwritten to a user friendly name. */
    managedDeviceName?:string | undefined;
    /** Ownership of the device. Can be 'company' or 'personal'. Possible values are: unknown, company, personal. */
    managedDeviceOwnerType?:ManagedDeviceOwnerType | undefined;
    /** Management channel of the device. Intune, EAS, etc. This property is read-only. Possible values are: eas, mdm, easMdm, intuneClient, easIntuneClient, configurationManagerClient, configurationManagerClientMdm, configurationManagerClientMdmEas, unknown, jamf, googleCloudDevicePolicyController, microsoft365ManagedMdm, msSense, intuneAosp. */
    managementAgent?:ManagementAgentType | undefined;
    /** Manufacturer of the device. This property is read-only. */
    manufacturer?:string | undefined;
    /** MEID. This property is read-only. */
    meid?:string | undefined;
    /** Model of the device. This property is read-only. */
    model?:string | undefined;
    /** Notes on the device created by IT Admin */
    notes?:string | undefined;
    /** Operating system of the device. Windows, iOS, etc. This property is read-only. */
    operatingSystem?:string | undefined;
    /** Operating system version of the device. This property is read-only. */
    osVersion?:string | undefined;
    /** Indicates the threat state of a device when a Mobile Threat Defense partner is in use by the account and device. Read Only. This property is read-only. Possible values are: unknown, activated, deactivated, secured, lowSeverity, mediumSeverity, highSeverity, unresponsive, compromised, misconfigured. */
    partnerReportedThreatState?:ManagedDevicePartnerReportedHealthState | undefined;
    /** Phone number of the device. This property is read-only. */
    phoneNumber?:string | undefined;
    /** Total Memory in Bytes. This property is read-only. */
    physicalMemoryInBytes?:number | undefined;
    /** An error string that identifies issues when creating Remote Assistance session objects. This property is read-only. */
    remoteAssistanceSessionErrorDetails?:string | undefined;
    /** Url that allows a Remote Assistance session to be established with the device. This property is read-only. */
    remoteAssistanceSessionUrl?:string | undefined;
    /** SerialNumber. This property is read-only. */
    serialNumber?:string | undefined;
    /** Subscriber Carrier. This property is read-only. */
    subscriberCarrier?:string | undefined;
    /** Total Storage in Bytes. This property is read-only. */
    totalStorageSpaceInBytes?:number | undefined;
    /** Unique Device Identifier for iOS and macOS devices. This property is read-only. */
    udid?:string | undefined;
    /** User display name. This property is read-only. */
    userDisplayName?:string | undefined;
    /** Unique Identifier for the user associated with the device. This property is read-only. */
    userId?:string | undefined;
    /** Device user principal name. This property is read-only. */
    userPrincipalName?:string | undefined;
    /** Wi-Fi MAC. This property is read-only. */
    wiFiMacAddress?:string | undefined;
}
