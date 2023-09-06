import { deserializeIntoOnenoteOperationCollectionResponse } from './deserializeIntoOnenoteOperationCollectionResponse';
import { type OnenoteOperationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOnenoteOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenoteOperationCollectionResponse;
}
