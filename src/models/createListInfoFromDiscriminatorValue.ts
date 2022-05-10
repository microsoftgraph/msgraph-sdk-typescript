import {ListInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createListInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : ListInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ListInfoImpl();
}
