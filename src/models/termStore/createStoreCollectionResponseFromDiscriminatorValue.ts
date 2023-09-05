import { deserializeIntoStoreCollectionResponse } from './deserializeIntoStoreCollectionResponse';
import { type StoreCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createStoreCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStoreCollectionResponse;
}
