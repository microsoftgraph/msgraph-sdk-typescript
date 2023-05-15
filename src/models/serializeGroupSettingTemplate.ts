import {GroupSettingTemplate} from './groupSettingTemplate';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeSettingTemplateValue} from './serializeSettingTemplateValue';
import {SettingTemplateValue} from './settingTemplateValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGroupSettingTemplate(writer: SerializationWriter, groupSettingTemplate: GroupSettingTemplate | undefined = {} as GroupSettingTemplate) : void {
        serializeDirectoryObject(writer, groupSettingTemplate)
        writer.writeStringValue("description", groupSettingTemplate.description);
        writer.writeStringValue("displayName", groupSettingTemplate.displayName);
        writer.writeCollectionOfObjectValues<SettingTemplateValue>("values", groupSettingTemplate.values, serializeSettingTemplateValue);
}
