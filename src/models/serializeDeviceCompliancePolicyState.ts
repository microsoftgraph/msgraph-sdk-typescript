import {ComplianceStatus} from './complianceStatus';
import {DeviceCompliancePolicySettingState} from './deviceCompliancePolicySettingState';
import {DeviceCompliancePolicyState} from './deviceCompliancePolicyState';
import {PolicyPlatformType} from './policyPlatformType';
import {serializeDeviceCompliancePolicySettingState} from './serializeDeviceCompliancePolicySettingState';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicyState(writer: SerializationWriter, deviceCompliancePolicyState: DeviceCompliancePolicyState | undefined = {} as DeviceCompliancePolicyState) : void {
        serializeEntity(writer, deviceCompliancePolicyState)
        writer.writeStringValue("displayName", deviceCompliancePolicyState.displayName);
        writer.writeEnumValue<PolicyPlatformType>("platformType", deviceCompliancePolicyState.platformType);
        writer.writeNumberValue("settingCount", deviceCompliancePolicyState.settingCount);
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicySettingState>("settingStates", deviceCompliancePolicyState.settingStates, serializeDeviceCompliancePolicySettingState);
        writer.writeEnumValue<ComplianceStatus>("state", deviceCompliancePolicyState.state);
        writer.writeNumberValue("version", deviceCompliancePolicyState.version);
}
