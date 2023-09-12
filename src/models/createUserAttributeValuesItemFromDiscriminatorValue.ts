import { deserializeIntoUserAttributeValuesItem } from './deserializeIntoUserAttributeValuesItem';
import { type UserAttributeValuesItem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserAttributeValuesItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserAttributeValuesItem;
}
