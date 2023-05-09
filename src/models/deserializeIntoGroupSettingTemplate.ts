import {createSettingTemplateValueFromDiscriminatorValue} from './createSettingTemplateValueFromDiscriminatorValue';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {GroupSettingTemplate} from './groupSettingTemplate';
import {serializeSettingTemplateValue} from './serializeSettingTemplateValue';
import {SettingTemplateValue} from './settingTemplateValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupSettingTemplate(groupSettingTemplate: GroupSettingTemplate | undefined = {} as GroupSettingTemplate) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(groupSettingTemplate),
        "description": n => { groupSettingTemplate.description = n.getStringValue(); },
        "displayName": n => { groupSettingTemplate.displayName = n.getStringValue(); },
        "values": n => { groupSettingTemplate.values = n.getCollectionOfObjectValues<SettingTemplateValue>(createSettingTemplateValueFromDiscriminatorValue); },
    }
}
