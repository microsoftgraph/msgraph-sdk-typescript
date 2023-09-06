import { deserializeIntoDataPolicyOperationCollectionResponse } from './deserializeIntoDataPolicyOperationCollectionResponse';
import { type DataPolicyOperationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDataPolicyOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDataPolicyOperationCollectionResponse;
}
