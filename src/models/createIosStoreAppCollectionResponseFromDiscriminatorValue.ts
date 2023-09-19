import { deserializeIntoIosStoreAppCollectionResponse } from './deserializeIntoIosStoreAppCollectionResponse';
import { type IosStoreAppCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosStoreAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosStoreAppCollectionResponse;
}
