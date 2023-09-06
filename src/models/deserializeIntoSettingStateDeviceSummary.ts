import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type SettingStateDeviceSummary } from './settingStateDeviceSummary';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSettingStateDeviceSummary(settingStateDeviceSummary: SettingStateDeviceSummary | undefined = {} as SettingStateDeviceSummary) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(settingStateDeviceSummary),
        "compliantDeviceCount": n => { settingStateDeviceSummary.compliantDeviceCount = n.getNumberValue(); },
        "conflictDeviceCount": n => { settingStateDeviceSummary.conflictDeviceCount = n.getNumberValue(); },
        "errorDeviceCount": n => { settingStateDeviceSummary.errorDeviceCount = n.getNumberValue(); },
        "instancePath": n => { settingStateDeviceSummary.instancePath = n.getStringValue(); },
        "nonCompliantDeviceCount": n => { settingStateDeviceSummary.nonCompliantDeviceCount = n.getNumberValue(); },
        "notApplicableDeviceCount": n => { settingStateDeviceSummary.notApplicableDeviceCount = n.getNumberValue(); },
        "remediatedDeviceCount": n => { settingStateDeviceSummary.remediatedDeviceCount = n.getNumberValue(); },
        "settingName": n => { settingStateDeviceSummary.settingName = n.getStringValue(); },
        "unknownDeviceCount": n => { settingStateDeviceSummary.unknownDeviceCount = n.getNumberValue(); },
    }
}
