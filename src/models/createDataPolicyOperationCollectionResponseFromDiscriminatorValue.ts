import {DataPolicyOperationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDataPolicyOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DataPolicyOperationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DataPolicyOperationCollectionResponseImpl();
}
