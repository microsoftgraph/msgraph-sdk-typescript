import {deserializeIntoUserAttributeValuesItem} from './deserializeIntoUserAttributeValuesItem';
import {UserAttributeValuesItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserAttributeValuesItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserAttributeValuesItem;
}
