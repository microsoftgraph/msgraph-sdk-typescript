import {DeviceConfigurationDeviceOverview} from './deviceConfigurationDeviceOverview';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
