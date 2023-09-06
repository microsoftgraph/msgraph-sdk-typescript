import { deserializeIntoStringCollectionResponse } from './deserializeIntoStringCollectionResponse';
import { type StringCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createStringCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStringCollectionResponse;
}
