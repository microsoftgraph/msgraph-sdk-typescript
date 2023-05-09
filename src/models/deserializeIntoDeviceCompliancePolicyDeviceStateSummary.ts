import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceCompliancePolicyDeviceStateSummary} from './deviceCompliancePolicyDeviceStateSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCompliancePolicyDeviceStateSummary(deviceCompliancePolicyDeviceStateSummary: DeviceCompliancePolicyDeviceStateSummary | undefined = {} as DeviceCompliancePolicyDeviceStateSummary) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceCompliancePolicyDeviceStateSummary),
        "compliantDeviceCount": n => { deviceCompliancePolicyDeviceStateSummary.compliantDeviceCount = n.getNumberValue(); },
        "configManagerCount": n => { deviceCompliancePolicyDeviceStateSummary.configManagerCount = n.getNumberValue(); },
        "conflictDeviceCount": n => { deviceCompliancePolicyDeviceStateSummary.conflictDeviceCount = n.getNumberValue(); },
        "errorDeviceCount": n => { deviceCompliancePolicyDeviceStateSummary.errorDeviceCount = n.getNumberValue(); },
        "inGracePeriodCount": n => { deviceCompliancePolicyDeviceStateSummary.inGracePeriodCount = n.getNumberValue(); },
        "nonCompliantDeviceCount": n => { deviceCompliancePolicyDeviceStateSummary.nonCompliantDeviceCount = n.getNumberValue(); },
        "notApplicableDeviceCount": n => { deviceCompliancePolicyDeviceStateSummary.notApplicableDeviceCount = n.getNumberValue(); },
        "remediatedDeviceCount": n => { deviceCompliancePolicyDeviceStateSummary.remediatedDeviceCount = n.getNumberValue(); },
        "unknownDeviceCount": n => { deviceCompliancePolicyDeviceStateSummary.unknownDeviceCount = n.getNumberValue(); },
    }
}
