import {createSettingValueFromDiscriminatorValue} from './createSettingValueFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {GroupSetting} from './groupSetting';
import {serializeSettingValue} from './serializeSettingValue';
import {SettingValue} from './settingValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupSetting(groupSetting: GroupSetting | undefined = {} as GroupSetting) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(groupSetting),
        "displayName": n => { groupSetting.displayName = n.getStringValue(); },
        "templateId": n => { groupSetting.templateId = n.getStringValue(); },
        "values": n => { groupSetting.values = n.getCollectionOfObjectValues<SettingValue>(createSettingValueFromDiscriminatorValue); },
    }
}
