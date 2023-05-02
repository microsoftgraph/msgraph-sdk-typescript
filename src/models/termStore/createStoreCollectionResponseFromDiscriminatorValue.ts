import {deserializeIntoStoreCollectionResponse} from './deserializeIntoStoreCollectionResponse';
import {StoreCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStoreCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStoreCollectionResponse;
}
