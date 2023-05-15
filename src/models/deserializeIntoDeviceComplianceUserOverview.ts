import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceComplianceUserOverview} from './deviceComplianceUserOverview';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceUserOverview(deviceComplianceUserOverview: DeviceComplianceUserOverview | undefined = {} as DeviceComplianceUserOverview) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceComplianceUserOverview),
        "configurationVersion": n => { deviceComplianceUserOverview.configurationVersion = n.getNumberValue(); },
        "errorCount": n => { deviceComplianceUserOverview.errorCount = n.getNumberValue(); },
        "failedCount": n => { deviceComplianceUserOverview.failedCount = n.getNumberValue(); },
        "lastUpdateDateTime": n => { deviceComplianceUserOverview.lastUpdateDateTime = n.getDateValue(); },
        "notApplicableCount": n => { deviceComplianceUserOverview.notApplicableCount = n.getNumberValue(); },
        "pendingCount": n => { deviceComplianceUserOverview.pendingCount = n.getNumberValue(); },
        "successCount": n => { deviceComplianceUserOverview.successCount = n.getNumberValue(); },
    }
}
