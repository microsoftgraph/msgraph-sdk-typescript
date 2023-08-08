import type {SettingValue} from './settingValue';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSettingValue(settingValue: SettingValue | undefined = {} as SettingValue) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { settingValue.name = n.getStringValue(); },
        "@odata.type": n => { settingValue.odataType = n.getStringValue(); },
        "value": n => { settingValue.value = n.getStringValue(); },
    }
}
