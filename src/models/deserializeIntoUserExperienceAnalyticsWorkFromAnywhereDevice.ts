import {deserializeIntoEntity} from './deserializeIntoEntity';
import {OperatingSystemUpgradeEligibility} from './operatingSystemUpgradeEligibility';
import {UserExperienceAnalyticsHealthState} from './userExperienceAnalyticsHealthState';
import {UserExperienceAnalyticsWorkFromAnywhereDevice} from './userExperienceAnalyticsWorkFromAnywhereDevice';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDevice(userExperienceAnalyticsWorkFromAnywhereDevice: UserExperienceAnalyticsWorkFromAnywhereDevice | undefined = {} as UserExperienceAnalyticsWorkFromAnywhereDevice) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsWorkFromAnywhereDevice),
        "autoPilotProfileAssigned": n => { userExperienceAnalyticsWorkFromAnywhereDevice.autoPilotProfileAssigned = n.getBooleanValue(); },
        "autoPilotRegistered": n => { userExperienceAnalyticsWorkFromAnywhereDevice.autoPilotRegistered = n.getBooleanValue(); },
        "azureAdDeviceId": n => { userExperienceAnalyticsWorkFromAnywhereDevice.azureAdDeviceId = n.getStringValue(); },
        "azureAdJoinType": n => { userExperienceAnalyticsWorkFromAnywhereDevice.azureAdJoinType = n.getStringValue(); },
        "azureAdRegistered": n => { userExperienceAnalyticsWorkFromAnywhereDevice.azureAdRegistered = n.getBooleanValue(); },
        "cloudIdentityScore": n => { userExperienceAnalyticsWorkFromAnywhereDevice.cloudIdentityScore = n.getNumberValue(); },
        "cloudManagementScore": n => { userExperienceAnalyticsWorkFromAnywhereDevice.cloudManagementScore = n.getNumberValue(); },
        "cloudProvisioningScore": n => { userExperienceAnalyticsWorkFromAnywhereDevice.cloudProvisioningScore = n.getNumberValue(); },
        "compliancePolicySetToIntune": n => { userExperienceAnalyticsWorkFromAnywhereDevice.compliancePolicySetToIntune = n.getBooleanValue(); },
        "deviceId": n => { userExperienceAnalyticsWorkFromAnywhereDevice.deviceId = n.getStringValue(); },
        "deviceName": n => { userExperienceAnalyticsWorkFromAnywhereDevice.deviceName = n.getStringValue(); },
        "healthStatus": n => { userExperienceAnalyticsWorkFromAnywhereDevice.healthStatus = n.getEnumValue<UserExperienceAnalyticsHealthState>(UserExperienceAnalyticsHealthState); },
        "isCloudManagedGatewayEnabled": n => { userExperienceAnalyticsWorkFromAnywhereDevice.isCloudManagedGatewayEnabled = n.getBooleanValue(); },
        "managedBy": n => { userExperienceAnalyticsWorkFromAnywhereDevice.managedBy = n.getStringValue(); },
        "manufacturer": n => { userExperienceAnalyticsWorkFromAnywhereDevice.manufacturer = n.getStringValue(); },
        "model": n => { userExperienceAnalyticsWorkFromAnywhereDevice.model = n.getStringValue(); },
        "osCheckFailed": n => { userExperienceAnalyticsWorkFromAnywhereDevice.osCheckFailed = n.getBooleanValue(); },
        "osDescription": n => { userExperienceAnalyticsWorkFromAnywhereDevice.osDescription = n.getStringValue(); },
        "osVersion": n => { userExperienceAnalyticsWorkFromAnywhereDevice.osVersion = n.getStringValue(); },
        "otherWorkloadsSetToIntune": n => { userExperienceAnalyticsWorkFromAnywhereDevice.otherWorkloadsSetToIntune = n.getBooleanValue(); },
        "ownership": n => { userExperienceAnalyticsWorkFromAnywhereDevice.ownership = n.getStringValue(); },
        "processor64BitCheckFailed": n => { userExperienceAnalyticsWorkFromAnywhereDevice.processor64BitCheckFailed = n.getBooleanValue(); },
        "processorCoreCountCheckFailed": n => { userExperienceAnalyticsWorkFromAnywhereDevice.processorCoreCountCheckFailed = n.getBooleanValue(); },
        "processorFamilyCheckFailed": n => { userExperienceAnalyticsWorkFromAnywhereDevice.processorFamilyCheckFailed = n.getBooleanValue(); },
        "processorSpeedCheckFailed": n => { userExperienceAnalyticsWorkFromAnywhereDevice.processorSpeedCheckFailed = n.getBooleanValue(); },
        "ramCheckFailed": n => { userExperienceAnalyticsWorkFromAnywhereDevice.ramCheckFailed = n.getBooleanValue(); },
        "secureBootCheckFailed": n => { userExperienceAnalyticsWorkFromAnywhereDevice.secureBootCheckFailed = n.getBooleanValue(); },
        "serialNumber": n => { userExperienceAnalyticsWorkFromAnywhereDevice.serialNumber = n.getStringValue(); },
        "storageCheckFailed": n => { userExperienceAnalyticsWorkFromAnywhereDevice.storageCheckFailed = n.getBooleanValue(); },
        "tenantAttached": n => { userExperienceAnalyticsWorkFromAnywhereDevice.tenantAttached = n.getBooleanValue(); },
        "tpmCheckFailed": n => { userExperienceAnalyticsWorkFromAnywhereDevice.tpmCheckFailed = n.getBooleanValue(); },
        "upgradeEligibility": n => { userExperienceAnalyticsWorkFromAnywhereDevice.upgradeEligibility = n.getEnumValue<OperatingSystemUpgradeEligibility>(OperatingSystemUpgradeEligibility); },
        "windowsScore": n => { userExperienceAnalyticsWorkFromAnywhereDevice.windowsScore = n.getNumberValue(); },
        "workFromAnywhereScore": n => { userExperienceAnalyticsWorkFromAnywhereDevice.workFromAnywhereScore = n.getNumberValue(); },
    }
}
