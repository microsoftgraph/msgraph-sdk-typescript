import { type SettingSource } from './settingSource';
import { SettingSourceType } from './settingSourceType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSettingSource(writer: SerializationWriter, settingSource: SettingSource | undefined = {} as SettingSource) : void {
        writer.writeStringValue("displayName", settingSource.displayName);
        writer.writeStringValue("id", settingSource.id);
        writer.writeStringValue("@odata.type", settingSource.odataType);
        writer.writeEnumValue<SettingSourceType>("sourceType", settingSource.sourceType);
        writer.writeAdditionalData(settingSource.additionalData);
}
