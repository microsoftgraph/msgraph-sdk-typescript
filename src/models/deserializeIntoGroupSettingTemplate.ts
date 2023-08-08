import {createSettingTemplateValueFromDiscriminatorValue} from './createSettingTemplateValueFromDiscriminatorValue';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import type {GroupSettingTemplate} from './groupSettingTemplate';
import {serializeSettingTemplateValue} from './serializeSettingTemplateValue';
import type {SettingTemplateValue} from './settingTemplateValue';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupSettingTemplate(groupSettingTemplate: GroupSettingTemplate | undefined = {} as GroupSettingTemplate) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(groupSettingTemplate),
        "description": n => { groupSettingTemplate.description = n.getStringValue(); },
        "displayName": n => { groupSettingTemplate.displayName = n.getStringValue(); },
        "values": n => { groupSettingTemplate.values = n.getCollectionOfObjectValues<SettingTemplateValue>(createSettingTemplateValueFromDiscriminatorValue); },
    }
}
