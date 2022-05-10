import {StoreCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStoreCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : StoreCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StoreCollectionResponseImpl();
}
