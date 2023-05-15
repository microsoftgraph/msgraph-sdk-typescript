import {SettingSource} from './settingSource';
import {SettingSourceType} from './settingSourceType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSettingSource(settingSource: SettingSource | undefined = {} as SettingSource) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { settingSource.displayName = n.getStringValue(); },
        "id": n => { settingSource.id = n.getStringValue(); },
        "@odata.type": n => { settingSource.odataType = n.getStringValue(); },
        "sourceType": n => { settingSource.sourceType = n.getEnumValue<SettingSourceType>(SettingSourceType); },
    }
}
