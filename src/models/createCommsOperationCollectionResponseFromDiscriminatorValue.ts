import { deserializeIntoCommsOperationCollectionResponse } from './deserializeIntoCommsOperationCollectionResponse';
import { type CommsOperationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCommsOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCommsOperationCollectionResponse;
}
