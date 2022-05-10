import {ItemActionStatImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemActionStatFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemActionStatImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemActionStatImpl();
}
