import {DeviceProtectionOverview} from './deviceProtectionOverview';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceProtectionOverview(deviceProtectionOverview: DeviceProtectionOverview | undefined = {} as DeviceProtectionOverview) : Record<string, (node: ParseNode) => void> {
    return {
        "cleanDeviceCount": n => { deviceProtectionOverview.cleanDeviceCount = n.getNumberValue(); },
        "criticalFailuresDeviceCount": n => { deviceProtectionOverview.criticalFailuresDeviceCount = n.getNumberValue(); },
        "inactiveThreatAgentDeviceCount": n => { deviceProtectionOverview.inactiveThreatAgentDeviceCount = n.getNumberValue(); },
        "@odata.type": n => { deviceProtectionOverview.odataType = n.getStringValue(); },
        "pendingFullScanDeviceCount": n => { deviceProtectionOverview.pendingFullScanDeviceCount = n.getNumberValue(); },
        "pendingManualStepsDeviceCount": n => { deviceProtectionOverview.pendingManualStepsDeviceCount = n.getNumberValue(); },
        "pendingOfflineScanDeviceCount": n => { deviceProtectionOverview.pendingOfflineScanDeviceCount = n.getNumberValue(); },
        "pendingQuickScanDeviceCount": n => { deviceProtectionOverview.pendingQuickScanDeviceCount = n.getNumberValue(); },
        "pendingRestartDeviceCount": n => { deviceProtectionOverview.pendingRestartDeviceCount = n.getNumberValue(); },
        "pendingSignatureUpdateDeviceCount": n => { deviceProtectionOverview.pendingSignatureUpdateDeviceCount = n.getNumberValue(); },
        "totalReportedDeviceCount": n => { deviceProtectionOverview.totalReportedDeviceCount = n.getNumberValue(); },
        "unknownStateThreatAgentDeviceCount": n => { deviceProtectionOverview.unknownStateThreatAgentDeviceCount = n.getNumberValue(); },
    }
}
