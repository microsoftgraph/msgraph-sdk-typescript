import {ListImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createListFromDiscriminatorValue(parseNode: ParseNode | undefined) : ListImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ListImpl();
}
