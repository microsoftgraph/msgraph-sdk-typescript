import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceConfigurationUserOverview} from './deviceConfigurationUserOverview';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationUserOverview(deviceConfigurationUserOverview: DeviceConfigurationUserOverview | undefined = {} as DeviceConfigurationUserOverview) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceConfigurationUserOverview),
        "configurationVersion": n => { deviceConfigurationUserOverview.configurationVersion = n.getNumberValue(); },
        "errorCount": n => { deviceConfigurationUserOverview.errorCount = n.getNumberValue(); },
        "failedCount": n => { deviceConfigurationUserOverview.failedCount = n.getNumberValue(); },
        "lastUpdateDateTime": n => { deviceConfigurationUserOverview.lastUpdateDateTime = n.getDateValue(); },
        "notApplicableCount": n => { deviceConfigurationUserOverview.notApplicableCount = n.getNumberValue(); },
        "pendingCount": n => { deviceConfigurationUserOverview.pendingCount = n.getNumberValue(); },
        "successCount": n => { deviceConfigurationUserOverview.successCount = n.getNumberValue(); },
    }
}
