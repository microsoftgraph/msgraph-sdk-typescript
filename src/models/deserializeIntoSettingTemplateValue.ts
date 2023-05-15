import {SettingTemplateValue} from './settingTemplateValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSettingTemplateValue(settingTemplateValue: SettingTemplateValue | undefined = {} as SettingTemplateValue) : Record<string, (node: ParseNode) => void> {
    return {
        "defaultValue": n => { settingTemplateValue.defaultValue = n.getStringValue(); },
        "description": n => { settingTemplateValue.description = n.getStringValue(); },
        "name": n => { settingTemplateValue.name = n.getStringValue(); },
        "@odata.type": n => { settingTemplateValue.odataType = n.getStringValue(); },
        "type": n => { settingTemplateValue.type = n.getStringValue(); },
    }
}
