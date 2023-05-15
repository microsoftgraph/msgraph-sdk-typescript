import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceComplianceDeviceOverview} from './deviceComplianceDeviceOverview';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceDeviceOverview(deviceComplianceDeviceOverview: DeviceComplianceDeviceOverview | undefined = {} as DeviceComplianceDeviceOverview) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceComplianceDeviceOverview),
        "configurationVersion": n => { deviceComplianceDeviceOverview.configurationVersion = n.getNumberValue(); },
        "errorCount": n => { deviceComplianceDeviceOverview.errorCount = n.getNumberValue(); },
        "failedCount": n => { deviceComplianceDeviceOverview.failedCount = n.getNumberValue(); },
        "lastUpdateDateTime": n => { deviceComplianceDeviceOverview.lastUpdateDateTime = n.getDateValue(); },
        "notApplicableCount": n => { deviceComplianceDeviceOverview.notApplicableCount = n.getNumberValue(); },
        "pendingCount": n => { deviceComplianceDeviceOverview.pendingCount = n.getNumberValue(); },
        "successCount": n => { deviceComplianceDeviceOverview.successCount = n.getNumberValue(); },
    }
}
