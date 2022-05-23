import {UserAttributeValuesItemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserAttributeValuesItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserAttributeValuesItemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserAttributeValuesItemImpl();
}
