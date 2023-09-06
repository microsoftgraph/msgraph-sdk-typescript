import { deserializeIntoResourceOperationCollectionResponse } from './deserializeIntoResourceOperationCollectionResponse';
import { type ResourceOperationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createResourceOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResourceOperationCollectionResponse;
}
