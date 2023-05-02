import {UserAttributeValuesItem} from './userAttributeValuesItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserAttributeValuesItem(userAttributeValuesItem: UserAttributeValuesItem | undefined = {} as UserAttributeValuesItem) : Record<string, (node: ParseNode) => void> {
    return {
        "isDefault": n => { userAttributeValuesItem.isDefault = n.getBooleanValue(); },
        "name": n => { userAttributeValuesItem.name = n.getStringValue(); },
        "@odata.type": n => { userAttributeValuesItem.odataType = n.getStringValue(); },
        "value": n => { userAttributeValuesItem.value = n.getStringValue(); },
    }
}
