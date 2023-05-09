import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceConfigurationDeviceOverview} from './deviceConfigurationDeviceOverview';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationDeviceOverview(deviceConfigurationDeviceOverview: DeviceConfigurationDeviceOverview | undefined = {} as DeviceConfigurationDeviceOverview) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceConfigurationDeviceOverview),
        "configurationVersion": n => { deviceConfigurationDeviceOverview.configurationVersion = n.getNumberValue(); },
        "errorCount": n => { deviceConfigurationDeviceOverview.errorCount = n.getNumberValue(); },
        "failedCount": n => { deviceConfigurationDeviceOverview.failedCount = n.getNumberValue(); },
        "lastUpdateDateTime": n => { deviceConfigurationDeviceOverview.lastUpdateDateTime = n.getDateValue(); },
        "notApplicableCount": n => { deviceConfigurationDeviceOverview.notApplicableCount = n.getNumberValue(); },
        "pendingCount": n => { deviceConfigurationDeviceOverview.pendingCount = n.getNumberValue(); },
        "successCount": n => { deviceConfigurationDeviceOverview.successCount = n.getNumberValue(); },
    }
}
