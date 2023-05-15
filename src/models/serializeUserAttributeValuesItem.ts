import {UserAttributeValuesItem} from './userAttributeValuesItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserAttributeValuesItem(writer: SerializationWriter, userAttributeValuesItem: UserAttributeValuesItem | undefined = {} as UserAttributeValuesItem) : void {
        writer.writeBooleanValue("isDefault", userAttributeValuesItem.isDefault);
        writer.writeStringValue("name", userAttributeValuesItem.name);
        writer.writeStringValue("@odata.type", userAttributeValuesItem.odataType);
        writer.writeStringValue("value", userAttributeValuesItem.value);
        writer.writeAdditionalData(userAttributeValuesItem.additionalData);
}
