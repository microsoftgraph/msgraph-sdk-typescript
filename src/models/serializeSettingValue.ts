import { type SettingValue } from './settingValue';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSettingValue(writer: SerializationWriter, settingValue: SettingValue | undefined = {} as SettingValue) : void {
        writer.writeStringValue("name", settingValue.name);
        writer.writeStringValue("@odata.type", settingValue.odataType);
        writer.writeStringValue("value", settingValue.value);
        writer.writeAdditionalData(settingValue.additionalData);
}
