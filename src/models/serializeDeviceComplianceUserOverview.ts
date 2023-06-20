import {DeviceComplianceUserOverview} from './deviceComplianceUserOverview';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceUserOverview(deviceComplianceUserOverview: DeviceComplianceUserOverview | undefined = {} as DeviceComplianceUserOverview, writer: SerializationWriter) : void {
        serializeEntity(writer, deviceComplianceUserOverview)
        writer.writeNumberValue("configurationVersion", deviceComplianceUserOverview.configurationVersion);
        writer.writeNumberValue("errorCount", deviceComplianceUserOverview.errorCount);
        writer.writeNumberValue("failedCount", deviceComplianceUserOverview.failedCount);
        writer.writeDateValue("lastUpdateDateTime", deviceComplianceUserOverview.lastUpdateDateTime);
        writer.writeNumberValue("notApplicableCount", deviceComplianceUserOverview.notApplicableCount);
        writer.writeNumberValue("pendingCount", deviceComplianceUserOverview.pendingCount);
        writer.writeNumberValue("successCount", deviceComplianceUserOverview.successCount);
}
