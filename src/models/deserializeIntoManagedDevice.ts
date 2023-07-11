import {ComplianceState} from './complianceState';
import {ConfigurationManagerClientEnabledFeatures} from './configurationManagerClientEnabledFeatures';
import {createConfigurationManagerClientEnabledFeaturesFromDiscriminatorValue} from './createConfigurationManagerClientEnabledFeaturesFromDiscriminatorValue';
import {createDeviceActionResultFromDiscriminatorValue} from './createDeviceActionResultFromDiscriminatorValue';
import {createDeviceCategoryFromDiscriminatorValue} from './createDeviceCategoryFromDiscriminatorValue';
import {createDeviceCompliancePolicyStateFromDiscriminatorValue} from './createDeviceCompliancePolicyStateFromDiscriminatorValue';
import {createDeviceConfigurationStateFromDiscriminatorValue} from './createDeviceConfigurationStateFromDiscriminatorValue';
import {createDeviceHealthAttestationStateFromDiscriminatorValue} from './createDeviceHealthAttestationStateFromDiscriminatorValue';
import {createDeviceLogCollectionResponseFromDiscriminatorValue} from './createDeviceLogCollectionResponseFromDiscriminatorValue';
import {createUserFromDiscriminatorValue} from './createUserFromDiscriminatorValue';
import {createWindowsProtectionStateFromDiscriminatorValue} from './createWindowsProtectionStateFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
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
import {ManagedDevice} from './managedDevice';
import {ManagedDeviceOwnerType} from './managedDeviceOwnerType';
import {ManagedDevicePartnerReportedHealthState} from './managedDevicePartnerReportedHealthState';
import {ManagementAgentType} from './managementAgentType';
import {serializeConfigurationManagerClientEnabledFeatures} from './serializeConfigurationManagerClientEnabledFeatures';
import {serializeDeviceActionResult} from './serializeDeviceActionResult';
import {serializeDeviceCategory} from './serializeDeviceCategory';
import {serializeDeviceCompliancePolicyState} from './serializeDeviceCompliancePolicyState';
import {serializeDeviceConfigurationState} from './serializeDeviceConfigurationState';
import {serializeDeviceHealthAttestationState} from './serializeDeviceHealthAttestationState';
import {serializeDeviceLogCollectionResponse} from './serializeDeviceLogCollectionResponse';
import {serializeUser} from './serializeUser';
import {serializeWindowsProtectionState} from './serializeWindowsProtectionState';
import {User} from './user';
import {WindowsProtectionState} from './windowsProtectionState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDevice(managedDevice: ManagedDevice | undefined = {} as ManagedDevice) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedDevice),
        "activationLockBypassCode": n => { managedDevice.activationLockBypassCode = n.getStringValue(); },
        "androidSecurityPatchLevel": n => { managedDevice.androidSecurityPatchLevel = n.getStringValue(); },
        "azureADDeviceId": n => { managedDevice.azureADDeviceId = n.getStringValue(); },
        "azureADRegistered": n => { managedDevice.azureADRegistered = n.getBooleanValue(); },
        "complianceGracePeriodExpirationDateTime": n => { managedDevice.complianceGracePeriodExpirationDateTime = n.getDateValue(); },
        "complianceState": n => { managedDevice.complianceState = n.getEnumValue<ComplianceState>(ComplianceState); },
        "configurationManagerClientEnabledFeatures": n => { managedDevice.configurationManagerClientEnabledFeatures = n.getObjectValue<ConfigurationManagerClientEnabledFeatures>(createConfigurationManagerClientEnabledFeaturesFromDiscriminatorValue); },
        "deviceActionResults": n => { managedDevice.deviceActionResults = n.getCollectionOfObjectValues<DeviceActionResult>(createDeviceActionResultFromDiscriminatorValue); },
        "deviceCategory": n => { managedDevice.deviceCategory = n.getObjectValue<DeviceCategory>(createDeviceCategoryFromDiscriminatorValue); },
        "deviceCategoryDisplayName": n => { managedDevice.deviceCategoryDisplayName = n.getStringValue(); },
        "deviceCompliancePolicyStates": n => { managedDevice.deviceCompliancePolicyStates = n.getCollectionOfObjectValues<DeviceCompliancePolicyState>(createDeviceCompliancePolicyStateFromDiscriminatorValue); },
        "deviceConfigurationStates": n => { managedDevice.deviceConfigurationStates = n.getCollectionOfObjectValues<DeviceConfigurationState>(createDeviceConfigurationStateFromDiscriminatorValue); },
        "deviceEnrollmentType": n => { managedDevice.deviceEnrollmentType = n.getEnumValue<DeviceEnrollmentType>(DeviceEnrollmentType); },
        "deviceHealthAttestationState": n => { managedDevice.deviceHealthAttestationState = n.getObjectValue<DeviceHealthAttestationState>(createDeviceHealthAttestationStateFromDiscriminatorValue); },
        "deviceName": n => { managedDevice.deviceName = n.getStringValue(); },
        "deviceRegistrationState": n => { managedDevice.deviceRegistrationState = n.getEnumValue<DeviceRegistrationState>(DeviceRegistrationState); },
        "easActivated": n => { managedDevice.easActivated = n.getBooleanValue(); },
        "easActivationDateTime": n => { managedDevice.easActivationDateTime = n.getDateValue(); },
        "easDeviceId": n => { managedDevice.easDeviceId = n.getStringValue(); },
        "emailAddress": n => { managedDevice.emailAddress = n.getStringValue(); },
        "enrolledDateTime": n => { managedDevice.enrolledDateTime = n.getDateValue(); },
        "ethernetMacAddress": n => { managedDevice.ethernetMacAddress = n.getStringValue(); },
        "exchangeAccessState": n => { managedDevice.exchangeAccessState = n.getEnumValue<DeviceManagementExchangeAccessState>(DeviceManagementExchangeAccessState); },
        "exchangeAccessStateReason": n => { managedDevice.exchangeAccessStateReason = n.getEnumValue<DeviceManagementExchangeAccessStateReason>(DeviceManagementExchangeAccessStateReason); },
        "exchangeLastSuccessfulSyncDateTime": n => { managedDevice.exchangeLastSuccessfulSyncDateTime = n.getDateValue(); },
        "freeStorageSpaceInBytes": n => { managedDevice.freeStorageSpaceInBytes = n.getNumberValue(); },
        "iccid": n => { managedDevice.iccid = n.getStringValue(); },
        "imei": n => { managedDevice.imei = n.getStringValue(); },
        "isEncrypted": n => { managedDevice.isEncrypted = n.getBooleanValue(); },
        "isSupervised": n => { managedDevice.isSupervised = n.getBooleanValue(); },
        "jailBroken": n => { managedDevice.jailBroken = n.getStringValue(); },
        "lastSyncDateTime": n => { managedDevice.lastSyncDateTime = n.getDateValue(); },
        "logCollectionRequests": n => { managedDevice.logCollectionRequests = n.getCollectionOfObjectValues<DeviceLogCollectionResponse>(createDeviceLogCollectionResponseFromDiscriminatorValue); },
        "managedDeviceName": n => { managedDevice.managedDeviceName = n.getStringValue(); },
        "managedDeviceOwnerType": n => { managedDevice.managedDeviceOwnerType = n.getEnumValue<ManagedDeviceOwnerType>(ManagedDeviceOwnerType); },
        "managementAgent": n => { managedDevice.managementAgent = n.getEnumValue<ManagementAgentType>(ManagementAgentType); },
        "managementCertificateExpirationDate": n => { managedDevice.managementCertificateExpirationDate = n.getDateValue(); },
        "manufacturer": n => { managedDevice.manufacturer = n.getStringValue(); },
        "meid": n => { managedDevice.meid = n.getStringValue(); },
        "model": n => { managedDevice.model = n.getStringValue(); },
        "notes": n => { managedDevice.notes = n.getStringValue(); },
        "operatingSystem": n => { managedDevice.operatingSystem = n.getStringValue(); },
        "osVersion": n => { managedDevice.osVersion = n.getStringValue(); },
        "partnerReportedThreatState": n => { managedDevice.partnerReportedThreatState = n.getEnumValue<ManagedDevicePartnerReportedHealthState>(ManagedDevicePartnerReportedHealthState); },
        "phoneNumber": n => { managedDevice.phoneNumber = n.getStringValue(); },
        "physicalMemoryInBytes": n => { managedDevice.physicalMemoryInBytes = n.getNumberValue(); },
        "remoteAssistanceSessionErrorDetails": n => { managedDevice.remoteAssistanceSessionErrorDetails = n.getStringValue(); },
        "remoteAssistanceSessionUrl": n => { managedDevice.remoteAssistanceSessionUrl = n.getStringValue(); },
        "requireUserEnrollmentApproval": n => { managedDevice.requireUserEnrollmentApproval = n.getBooleanValue(); },
        "serialNumber": n => { managedDevice.serialNumber = n.getStringValue(); },
        "subscriberCarrier": n => { managedDevice.subscriberCarrier = n.getStringValue(); },
        "totalStorageSpaceInBytes": n => { managedDevice.totalStorageSpaceInBytes = n.getNumberValue(); },
        "udid": n => { managedDevice.udid = n.getStringValue(); },
        "userDisplayName": n => { managedDevice.userDisplayName = n.getStringValue(); },
        "userId": n => { managedDevice.userId = n.getStringValue(); },
        "userPrincipalName": n => { managedDevice.userPrincipalName = n.getStringValue(); },
        "users": n => { managedDevice.users = n.getCollectionOfObjectValues<User>(createUserFromDiscriminatorValue); },
        "wiFiMacAddress": n => { managedDevice.wiFiMacAddress = n.getStringValue(); },
        "windowsProtectionState": n => { managedDevice.windowsProtectionState = n.getObjectValue<WindowsProtectionState>(createWindowsProtectionStateFromDiscriminatorValue); },
    }
}
