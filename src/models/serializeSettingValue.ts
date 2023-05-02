import {SettingValue} from './settingValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSettingValue(writer: SerializationWriter, settingValue: SettingValue | undefined = {} as SettingValue) : void {
        writer.writeStringValue("name", settingValue.name);
        writer.writeStringValue("@odata.type", settingValue.odataType);
        writer.writeStringValue("value", settingValue.value);
        writer.writeAdditionalData(settingValue.additionalData);
}
