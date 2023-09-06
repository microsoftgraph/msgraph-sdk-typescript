import { ComplianceState } from './complianceState';
import { type ConfigurationManagerClientEnabledFeatures } from './configurationManagerClientEnabledFeatures';
import { type DeviceActionResult } from './deviceActionResult';
import { type DeviceCategory } from './deviceCategory';
import { type DeviceCompliancePolicyState } from './deviceCompliancePolicyState';
import { type DeviceConfigurationState } from './deviceConfigurationState';
import { DeviceEnrollmentType } from './deviceEnrollmentType';
import { type DeviceHealthAttestationState } from './deviceHealthAttestationState';
import { type DeviceLogCollectionResponse } from './deviceLogCollectionResponse';
import { DeviceManagementExchangeAccessState } from './deviceManagementExchangeAccessState';
import { DeviceManagementExchangeAccessStateReason } from './deviceManagementExchangeAccessStateReason';
import { DeviceRegistrationState } from './deviceRegistrationState';
import { type ManagedDevice } from './managedDevice';
import { ManagedDeviceOwnerType } from './managedDeviceOwnerType';
import { ManagedDevicePartnerReportedHealthState } from './managedDevicePartnerReportedHealthState';
import { ManagementAgentType } from './managementAgentType';
import { serializeConfigurationManagerClientEnabledFeatures } from './serializeConfigurationManagerClientEnabledFeatures';
import { serializeDeviceActionResult } from './serializeDeviceActionResult';
import { serializeDeviceCategory } from './serializeDeviceCategory';
import { serializeDeviceCompliancePolicyState } from './serializeDeviceCompliancePolicyState';
import { serializeDeviceConfigurationState } from './serializeDeviceConfigurationState';
import { serializeDeviceHealthAttestationState } from './serializeDeviceHealthAttestationState';
import { serializeDeviceLogCollectionResponse } from './serializeDeviceLogCollectionResponse';
import { serializeEntity } from './serializeEntity';
import { serializeUser } from './serializeUser';
import { serializeWindowsProtectionState } from './serializeWindowsProtectionState';
import { type User } from './user';
import { type WindowsProtectionState } from './windowsProtectionState';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedDevice(writer: SerializationWriter, managedDevice: ManagedDevice | undefined = {} as ManagedDevice) : void {
        serializeEntity(writer, managedDevice)
        writer.writeEnumValue<ComplianceState>("complianceState", managedDevice.complianceState);
        writer.writeObjectValue<DeviceCategory>("deviceCategory", managedDevice.deviceCategory, serializeDeviceCategory);
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicyState>("deviceCompliancePolicyStates", managedDevice.deviceCompliancePolicyStates, serializeDeviceCompliancePolicyState);
        writer.writeCollectionOfObjectValues<DeviceConfigurationState>("deviceConfigurationStates", managedDevice.deviceConfigurationStates, serializeDeviceConfigurationState);
        writer.writeEnumValue<DeviceEnrollmentType>("deviceEnrollmentType", managedDevice.deviceEnrollmentType);
        writer.writeEnumValue<DeviceRegistrationState>("deviceRegistrationState", managedDevice.deviceRegistrationState);
        writer.writeEnumValue<DeviceManagementExchangeAccessState>("exchangeAccessState", managedDevice.exchangeAccessState);
        writer.writeEnumValue<DeviceManagementExchangeAccessStateReason>("exchangeAccessStateReason", managedDevice.exchangeAccessStateReason);
        writer.writeCollectionOfObjectValues<DeviceLogCollectionResponse>("logCollectionRequests", managedDevice.logCollectionRequests, serializeDeviceLogCollectionResponse);
        writer.writeStringValue("managedDeviceName", managedDevice.managedDeviceName);
        writer.writeEnumValue<ManagedDeviceOwnerType>("managedDeviceOwnerType", managedDevice.managedDeviceOwnerType);
        writer.writeEnumValue<ManagementAgentType>("managementAgent", managedDevice.managementAgent);
        writer.writeStringValue("notes", managedDevice.notes);
        writer.writeEnumValue<ManagedDevicePartnerReportedHealthState>("partnerReportedThreatState", managedDevice.partnerReportedThreatState);
        writer.writeCollectionOfObjectValues<User>("users", managedDevice.users, serializeUser);
        writer.writeObjectValue<WindowsProtectionState>("windowsProtectionState", managedDevice.windowsProtectionState, serializeWindowsProtectionState);
}
