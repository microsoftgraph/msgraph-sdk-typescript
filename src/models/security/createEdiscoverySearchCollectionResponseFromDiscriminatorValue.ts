import { deserializeIntoEdiscoverySearchCollectionResponse } from './deserializeIntoEdiscoverySearchCollectionResponse';
import { type EdiscoverySearchCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdiscoverySearchCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoverySearchCollectionResponse;
}
