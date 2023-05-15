import {serializeEntity} from './serializeEntity';
import {SettingStateDeviceSummary} from './settingStateDeviceSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSettingStateDeviceSummary(writer: SerializationWriter, settingStateDeviceSummary: SettingStateDeviceSummary | undefined = {} as SettingStateDeviceSummary) : void {
        serializeEntity(writer, settingStateDeviceSummary)
        writer.writeNumberValue("compliantDeviceCount", settingStateDeviceSummary.compliantDeviceCount);
        writer.writeNumberValue("conflictDeviceCount", settingStateDeviceSummary.conflictDeviceCount);
        writer.writeNumberValue("errorDeviceCount", settingStateDeviceSummary.errorDeviceCount);
        writer.writeStringValue("instancePath", settingStateDeviceSummary.instancePath);
        writer.writeNumberValue("nonCompliantDeviceCount", settingStateDeviceSummary.nonCompliantDeviceCount);
        writer.writeNumberValue("notApplicableDeviceCount", settingStateDeviceSummary.notApplicableDeviceCount);
        writer.writeNumberValue("remediatedDeviceCount", settingStateDeviceSummary.remediatedDeviceCount);
        writer.writeStringValue("settingName", settingStateDeviceSummary.settingName);
        writer.writeNumberValue("unknownDeviceCount", settingStateDeviceSummary.unknownDeviceCount);
}
