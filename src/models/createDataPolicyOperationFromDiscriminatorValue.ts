import {DataPolicyOperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDataPolicyOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : DataPolicyOperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DataPolicyOperationImpl();
}
