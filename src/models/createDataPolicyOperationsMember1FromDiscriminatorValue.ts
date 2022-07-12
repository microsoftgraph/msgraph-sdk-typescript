import {DataPolicyOperationsMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDataPolicyOperationsMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : DataPolicyOperationsMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DataPolicyOperationsMember1();
}
