import { deserializeIntoListCollectionResponse } from './deserializeIntoListCollectionResponse';
import { type ListCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createListCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoListCollectionResponse;
}
