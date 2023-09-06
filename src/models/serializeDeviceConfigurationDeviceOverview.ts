import { type DeviceConfigurationDeviceOverview } from './deviceConfigurationDeviceOverview';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationDeviceOverview(writer: SerializationWriter, deviceConfigurationDeviceOverview: DeviceConfigurationDeviceOverview | undefined = {} as DeviceConfigurationDeviceOverview) : void {
        serializeEntity(writer, deviceConfigurationDeviceOverview)
        writer.writeNumberValue("configurationVersion", deviceConfigurationDeviceOverview.configurationVersion);
        writer.writeNumberValue("errorCount", deviceConfigurationDeviceOverview.errorCount);
        writer.writeNumberValue("failedCount", deviceConfigurationDeviceOverview.failedCount);
        writer.writeDateValue("lastUpdateDateTime", deviceConfigurationDeviceOverview.lastUpdateDateTime);
        writer.writeNumberValue("notApplicableCount", deviceConfigurationDeviceOverview.notApplicableCount);
        writer.writeNumberValue("pendingCount", deviceConfigurationDeviceOverview.pendingCount);
        writer.writeNumberValue("successCount", deviceConfigurationDeviceOverview.successCount);
}
