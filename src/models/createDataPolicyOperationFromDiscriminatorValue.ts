import {deserializeIntoDataPolicyOperation} from './deserializeIntoDataPolicyOperation';
import {DataPolicyOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDataPolicyOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDataPolicyOperation;
}
