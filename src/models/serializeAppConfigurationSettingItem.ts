import {AppConfigurationSettingItem} from './appConfigurationSettingItem';
import {MdmAppConfigKeyType} from './mdmAppConfigKeyType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppConfigurationSettingItem(writer: SerializationWriter, appConfigurationSettingItem: AppConfigurationSettingItem | undefined = {} as AppConfigurationSettingItem) : void {
        writer.writeStringValue("appConfigKey", appConfigurationSettingItem.appConfigKey);
        writer.writeEnumValue<MdmAppConfigKeyType>("appConfigKeyType", appConfigurationSettingItem.appConfigKeyType);
        writer.writeStringValue("appConfigKeyValue", appConfigurationSettingItem.appConfigKeyValue);
        writer.writeStringValue("@odata.type", appConfigurationSettingItem.odataType);
        writer.writeAdditionalData(appConfigurationSettingItem.additionalData);
}
