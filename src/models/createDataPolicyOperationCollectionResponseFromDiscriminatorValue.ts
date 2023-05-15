import {deserializeIntoDataPolicyOperationCollectionResponse} from './deserializeIntoDataPolicyOperationCollectionResponse';
import {DataPolicyOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDataPolicyOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDataPolicyOperationCollectionResponse;
}
