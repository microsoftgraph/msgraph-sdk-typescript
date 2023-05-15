import {DeviceCompliancePolicySettingStateSummary} from './deviceCompliancePolicySettingStateSummary';
import {DeviceComplianceSettingState} from './deviceComplianceSettingState';
import {PolicyPlatformType} from './policyPlatformType';
import {serializeDeviceComplianceSettingState} from './serializeDeviceComplianceSettingState';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicySettingStateSummary(writer: SerializationWriter, deviceCompliancePolicySettingStateSummary: DeviceCompliancePolicySettingStateSummary | undefined = {} as DeviceCompliancePolicySettingStateSummary) : void {
        serializeEntity(writer, deviceCompliancePolicySettingStateSummary)
        writer.writeNumberValue("compliantDeviceCount", deviceCompliancePolicySettingStateSummary.compliantDeviceCount);
        writer.writeNumberValue("conflictDeviceCount", deviceCompliancePolicySettingStateSummary.conflictDeviceCount);
        writer.writeCollectionOfObjectValues<DeviceComplianceSettingState>("deviceComplianceSettingStates", deviceCompliancePolicySettingStateSummary.deviceComplianceSettingStates, serializeDeviceComplianceSettingState);
        writer.writeNumberValue("errorDeviceCount", deviceCompliancePolicySettingStateSummary.errorDeviceCount);
        writer.writeNumberValue("nonCompliantDeviceCount", deviceCompliancePolicySettingStateSummary.nonCompliantDeviceCount);
        writer.writeNumberValue("notApplicableDeviceCount", deviceCompliancePolicySettingStateSummary.notApplicableDeviceCount);
        writer.writeEnumValue<PolicyPlatformType>("platformType", deviceCompliancePolicySettingStateSummary.platformType);
        writer.writeNumberValue("remediatedDeviceCount", deviceCompliancePolicySettingStateSummary.remediatedDeviceCount);
        writer.writeStringValue("setting", deviceCompliancePolicySettingStateSummary.setting);
        writer.writeStringValue("settingName", deviceCompliancePolicySettingStateSummary.settingName);
        writer.writeNumberValue("unknownDeviceCount", deviceCompliancePolicySettingStateSummary.unknownDeviceCount);
}
