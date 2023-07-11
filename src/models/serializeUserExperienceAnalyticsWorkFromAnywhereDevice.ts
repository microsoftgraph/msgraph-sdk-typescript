import {OperatingSystemUpgradeEligibility} from './operatingSystemUpgradeEligibility';
import {serializeEntity} from './serializeEntity';
import {UserExperienceAnalyticsHealthState} from './userExperienceAnalyticsHealthState';
import {UserExperienceAnalyticsWorkFromAnywhereDevice} from './userExperienceAnalyticsWorkFromAnywhereDevice';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsWorkFromAnywhereDevice(writer: SerializationWriter, userExperienceAnalyticsWorkFromAnywhereDevice: UserExperienceAnalyticsWorkFromAnywhereDevice | undefined = {} as UserExperienceAnalyticsWorkFromAnywhereDevice) : void {
        serializeEntity(writer, userExperienceAnalyticsWorkFromAnywhereDevice)
        writer.writeBooleanValue("autoPilotProfileAssigned", userExperienceAnalyticsWorkFromAnywhereDevice.autoPilotProfileAssigned);
        writer.writeBooleanValue("autoPilotRegistered", userExperienceAnalyticsWorkFromAnywhereDevice.autoPilotRegistered);
        writer.writeStringValue("azureAdDeviceId", userExperienceAnalyticsWorkFromAnywhereDevice.azureAdDeviceId);
        writer.writeStringValue("azureAdJoinType", userExperienceAnalyticsWorkFromAnywhereDevice.azureAdJoinType);
        writer.writeBooleanValue("azureAdRegistered", userExperienceAnalyticsWorkFromAnywhereDevice.azureAdRegistered);
        writer.writeNumberValue("cloudIdentityScore", userExperienceAnalyticsWorkFromAnywhereDevice.cloudIdentityScore);
        writer.writeNumberValue("cloudManagementScore", userExperienceAnalyticsWorkFromAnywhereDevice.cloudManagementScore);
        writer.writeNumberValue("cloudProvisioningScore", userExperienceAnalyticsWorkFromAnywhereDevice.cloudProvisioningScore);
        writer.writeBooleanValue("compliancePolicySetToIntune", userExperienceAnalyticsWorkFromAnywhereDevice.compliancePolicySetToIntune);
        writer.writeStringValue("deviceId", userExperienceAnalyticsWorkFromAnywhereDevice.deviceId);
        writer.writeStringValue("deviceName", userExperienceAnalyticsWorkFromAnywhereDevice.deviceName);
        writer.writeEnumValue<UserExperienceAnalyticsHealthState>("healthStatus", userExperienceAnalyticsWorkFromAnywhereDevice.healthStatus);
        writer.writeBooleanValue("isCloudManagedGatewayEnabled", userExperienceAnalyticsWorkFromAnywhereDevice.isCloudManagedGatewayEnabled);
        writer.writeStringValue("managedBy", userExperienceAnalyticsWorkFromAnywhereDevice.managedBy);
        writer.writeStringValue("manufacturer", userExperienceAnalyticsWorkFromAnywhereDevice.manufacturer);
        writer.writeStringValue("model", userExperienceAnalyticsWorkFromAnywhereDevice.model);
        writer.writeBooleanValue("osCheckFailed", userExperienceAnalyticsWorkFromAnywhereDevice.osCheckFailed);
        writer.writeStringValue("osDescription", userExperienceAnalyticsWorkFromAnywhereDevice.osDescription);
        writer.writeStringValue("osVersion", userExperienceAnalyticsWorkFromAnywhereDevice.osVersion);
        writer.writeBooleanValue("otherWorkloadsSetToIntune", userExperienceAnalyticsWorkFromAnywhereDevice.otherWorkloadsSetToIntune);
        writer.writeStringValue("ownership", userExperienceAnalyticsWorkFromAnywhereDevice.ownership);
        writer.writeBooleanValue("processor64BitCheckFailed", userExperienceAnalyticsWorkFromAnywhereDevice.processor64BitCheckFailed);
        writer.writeBooleanValue("processorCoreCountCheckFailed", userExperienceAnalyticsWorkFromAnywhereDevice.processorCoreCountCheckFailed);
        writer.writeBooleanValue("processorFamilyCheckFailed", userExperienceAnalyticsWorkFromAnywhereDevice.processorFamilyCheckFailed);
        writer.writeBooleanValue("processorSpeedCheckFailed", userExperienceAnalyticsWorkFromAnywhereDevice.processorSpeedCheckFailed);
        writer.writeBooleanValue("ramCheckFailed", userExperienceAnalyticsWorkFromAnywhereDevice.ramCheckFailed);
        writer.writeBooleanValue("secureBootCheckFailed", userExperienceAnalyticsWorkFromAnywhereDevice.secureBootCheckFailed);
        writer.writeStringValue("serialNumber", userExperienceAnalyticsWorkFromAnywhereDevice.serialNumber);
        writer.writeBooleanValue("storageCheckFailed", userExperienceAnalyticsWorkFromAnywhereDevice.storageCheckFailed);
        writer.writeBooleanValue("tenantAttached", userExperienceAnalyticsWorkFromAnywhereDevice.tenantAttached);
        writer.writeBooleanValue("tpmCheckFailed", userExperienceAnalyticsWorkFromAnywhereDevice.tpmCheckFailed);
        writer.writeEnumValue<OperatingSystemUpgradeEligibility>("upgradeEligibility", userExperienceAnalyticsWorkFromAnywhereDevice.upgradeEligibility);
        writer.writeNumberValue("windowsScore", userExperienceAnalyticsWorkFromAnywhereDevice.windowsScore);
        writer.writeNumberValue("workFromAnywhereScore", userExperienceAnalyticsWorkFromAnywhereDevice.workFromAnywhereScore);
}
