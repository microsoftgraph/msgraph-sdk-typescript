import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceConfigurationDeviceStateSummary} from './deviceConfigurationDeviceStateSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationDeviceStateSummary(deviceConfigurationDeviceStateSummary: DeviceConfigurationDeviceStateSummary | undefined = {} as DeviceConfigurationDeviceStateSummary) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceConfigurationDeviceStateSummary),
        "compliantDeviceCount": n => { deviceConfigurationDeviceStateSummary.compliantDeviceCount = n.getNumberValue(); },
        "conflictDeviceCount": n => { deviceConfigurationDeviceStateSummary.conflictDeviceCount = n.getNumberValue(); },
        "errorDeviceCount": n => { deviceConfigurationDeviceStateSummary.errorDeviceCount = n.getNumberValue(); },
        "nonCompliantDeviceCount": n => { deviceConfigurationDeviceStateSummary.nonCompliantDeviceCount = n.getNumberValue(); },
        "notApplicableDeviceCount": n => { deviceConfigurationDeviceStateSummary.notApplicableDeviceCount = n.getNumberValue(); },
        "remediatedDeviceCount": n => { deviceConfigurationDeviceStateSummary.remediatedDeviceCount = n.getNumberValue(); },
        "unknownDeviceCount": n => { deviceConfigurationDeviceStateSummary.unknownDeviceCount = n.getNumberValue(); },
    }
}
