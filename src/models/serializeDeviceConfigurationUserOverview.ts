import {DeviceConfigurationUserOverview} from './deviceConfigurationUserOverview';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationUserOverview(writer: SerializationWriter, deviceConfigurationUserOverview: DeviceConfigurationUserOverview | undefined = {} as DeviceConfigurationUserOverview) : void {
        serializeEntity(writer, deviceConfigurationUserOverview)
        writer.writeNumberValue("configurationVersion", deviceConfigurationUserOverview.configurationVersion);
        writer.writeNumberValue("errorCount", deviceConfigurationUserOverview.errorCount);
        writer.writeNumberValue("failedCount", deviceConfigurationUserOverview.failedCount);
        writer.writeDateValue("lastUpdateDateTime", deviceConfigurationUserOverview.lastUpdateDateTime);
        writer.writeNumberValue("notApplicableCount", deviceConfigurationUserOverview.notApplicableCount);
        writer.writeNumberValue("pendingCount", deviceConfigurationUserOverview.pendingCount);
        writer.writeNumberValue("successCount", deviceConfigurationUserOverview.successCount);
}
