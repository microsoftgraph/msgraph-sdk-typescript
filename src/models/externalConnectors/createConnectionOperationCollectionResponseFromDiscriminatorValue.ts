import { deserializeIntoConnectionOperationCollectionResponse } from './deserializeIntoConnectionOperationCollectionResponse';
import { type ConnectionOperationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConnectionOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConnectionOperationCollectionResponse;
}
