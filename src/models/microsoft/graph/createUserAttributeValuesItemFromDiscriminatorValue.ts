import {UserAttributeValuesItem} from './userAttributeValuesItem';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserAttributeValuesItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserAttributeValuesItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserAttributeValuesItem();
}
