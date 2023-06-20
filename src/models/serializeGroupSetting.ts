import {GroupSetting} from './groupSetting';
import {serializeEntity} from './serializeEntity';
import {serializeSettingValue} from './serializeSettingValue';
import {SettingValue} from './settingValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGroupSetting(groupSetting: GroupSetting | undefined = {} as GroupSetting, writer: SerializationWriter) : void {
        serializeEntity(writer, groupSetting)
        writer.writeStringValue("displayName", groupSetting.displayName);
        writer.writeStringValue("templateId", groupSetting.templateId);
        writer.writeCollectionOfObjectValues<SettingValue>("values", groupSetting.values, serializeSettingValue);
}
