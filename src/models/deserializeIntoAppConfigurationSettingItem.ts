import { type AppConfigurationSettingItem } from './appConfigurationSettingItem';
import { MdmAppConfigKeyType } from './mdmAppConfigKeyType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAppConfigurationSettingItem(appConfigurationSettingItem: AppConfigurationSettingItem | undefined = {} as AppConfigurationSettingItem) : Record<string, (node: ParseNode) => void> {
    return {
        "appConfigKey": n => { appConfigurationSettingItem.appConfigKey = n.getStringValue(); },
        "appConfigKeyType": n => { appConfigurationSettingItem.appConfigKeyType = n.getEnumValue<MdmAppConfigKeyType>(MdmAppConfigKeyType); },
        "appConfigKeyValue": n => { appConfigurationSettingItem.appConfigKeyValue = n.getStringValue(); },
        "@odata.type": n => { appConfigurationSettingItem.odataType = n.getStringValue(); },
    }
}
