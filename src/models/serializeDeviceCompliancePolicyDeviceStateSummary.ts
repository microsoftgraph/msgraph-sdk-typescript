import {DeviceCompliancePolicyDeviceStateSummary} from './deviceCompliancePolicyDeviceStateSummary';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicyDeviceStateSummary(writer: SerializationWriter, deviceCompliancePolicyDeviceStateSummary: DeviceCompliancePolicyDeviceStateSummary | undefined = {} as DeviceCompliancePolicyDeviceStateSummary) : void {
        serializeEntity(writer, deviceCompliancePolicyDeviceStateSummary)
        writer.writeNumberValue("compliantDeviceCount", deviceCompliancePolicyDeviceStateSummary.compliantDeviceCount);
        writer.writeNumberValue("configManagerCount", deviceCompliancePolicyDeviceStateSummary.configManagerCount);
        writer.writeNumberValue("conflictDeviceCount", deviceCompliancePolicyDeviceStateSummary.conflictDeviceCount);
        writer.writeNumberValue("errorDeviceCount", deviceCompliancePolicyDeviceStateSummary.errorDeviceCount);
        writer.writeNumberValue("inGracePeriodCount", deviceCompliancePolicyDeviceStateSummary.inGracePeriodCount);
        writer.writeNumberValue("nonCompliantDeviceCount", deviceCompliancePolicyDeviceStateSummary.nonCompliantDeviceCount);
        writer.writeNumberValue("notApplicableDeviceCount", deviceCompliancePolicyDeviceStateSummary.notApplicableDeviceCount);
        writer.writeNumberValue("remediatedDeviceCount", deviceCompliancePolicyDeviceStateSummary.remediatedDeviceCount);
        writer.writeNumberValue("unknownDeviceCount", deviceCompliancePolicyDeviceStateSummary.unknownDeviceCount);
}
