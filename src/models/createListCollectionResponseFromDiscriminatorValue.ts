import {ListCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createListCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ListCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ListCollectionResponseImpl();
}
