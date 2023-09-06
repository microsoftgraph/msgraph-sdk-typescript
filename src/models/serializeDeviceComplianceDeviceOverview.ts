import { type DeviceComplianceDeviceOverview } from './deviceComplianceDeviceOverview';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceDeviceOverview(writer: SerializationWriter, deviceComplianceDeviceOverview: DeviceComplianceDeviceOverview | undefined = {} as DeviceComplianceDeviceOverview) : void {
        serializeEntity(writer, deviceComplianceDeviceOverview)
        writer.writeNumberValue("configurationVersion", deviceComplianceDeviceOverview.configurationVersion);
        writer.writeNumberValue("errorCount", deviceComplianceDeviceOverview.errorCount);
        writer.writeNumberValue("failedCount", deviceComplianceDeviceOverview.failedCount);
        writer.writeDateValue("lastUpdateDateTime", deviceComplianceDeviceOverview.lastUpdateDateTime);
        writer.writeNumberValue("notApplicableCount", deviceComplianceDeviceOverview.notApplicableCount);
        writer.writeNumberValue("pendingCount", deviceComplianceDeviceOverview.pendingCount);
        writer.writeNumberValue("successCount", deviceComplianceDeviceOverview.successCount);
}
