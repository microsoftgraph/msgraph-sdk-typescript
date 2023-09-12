import { type DeviceConfigurationDeviceStateSummary } from './deviceConfigurationDeviceStateSummary';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationDeviceStateSummary(writer: SerializationWriter, deviceConfigurationDeviceStateSummary: DeviceConfigurationDeviceStateSummary | undefined = {} as DeviceConfigurationDeviceStateSummary) : void {
        serializeEntity(writer, deviceConfigurationDeviceStateSummary)
        writer.writeNumberValue("compliantDeviceCount", deviceConfigurationDeviceStateSummary.compliantDeviceCount);
        writer.writeNumberValue("conflictDeviceCount", deviceConfigurationDeviceStateSummary.conflictDeviceCount);
        writer.writeNumberValue("errorDeviceCount", deviceConfigurationDeviceStateSummary.errorDeviceCount);
        writer.writeNumberValue("nonCompliantDeviceCount", deviceConfigurationDeviceStateSummary.nonCompliantDeviceCount);
        writer.writeNumberValue("notApplicableDeviceCount", deviceConfigurationDeviceStateSummary.notApplicableDeviceCount);
        writer.writeNumberValue("remediatedDeviceCount", deviceConfigurationDeviceStateSummary.remediatedDeviceCount);
        writer.writeNumberValue("unknownDeviceCount", deviceConfigurationDeviceStateSummary.unknownDeviceCount);
}
