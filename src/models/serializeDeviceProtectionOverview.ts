import {DeviceProtectionOverview} from './deviceProtectionOverview';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceProtectionOverview(writer: SerializationWriter, deviceProtectionOverview: DeviceProtectionOverview | undefined = {} as DeviceProtectionOverview) : void {
        writer.writeNumberValue("cleanDeviceCount", deviceProtectionOverview.cleanDeviceCount);
        writer.writeNumberValue("criticalFailuresDeviceCount", deviceProtectionOverview.criticalFailuresDeviceCount);
        writer.writeNumberValue("inactiveThreatAgentDeviceCount", deviceProtectionOverview.inactiveThreatAgentDeviceCount);
        writer.writeStringValue("@odata.type", deviceProtectionOverview.odataType);
        writer.writeNumberValue("pendingFullScanDeviceCount", deviceProtectionOverview.pendingFullScanDeviceCount);
        writer.writeNumberValue("pendingManualStepsDeviceCount", deviceProtectionOverview.pendingManualStepsDeviceCount);
        writer.writeNumberValue("pendingOfflineScanDeviceCount", deviceProtectionOverview.pendingOfflineScanDeviceCount);
        writer.writeNumberValue("pendingQuickScanDeviceCount", deviceProtectionOverview.pendingQuickScanDeviceCount);
        writer.writeNumberValue("pendingRestartDeviceCount", deviceProtectionOverview.pendingRestartDeviceCount);
        writer.writeNumberValue("pendingSignatureUpdateDeviceCount", deviceProtectionOverview.pendingSignatureUpdateDeviceCount);
        writer.writeNumberValue("totalReportedDeviceCount", deviceProtectionOverview.totalReportedDeviceCount);
        writer.writeNumberValue("unknownStateThreatAgentDeviceCount", deviceProtectionOverview.unknownStateThreatAgentDeviceCount);
        writer.writeAdditionalData(deviceProtectionOverview.additionalData);
}
