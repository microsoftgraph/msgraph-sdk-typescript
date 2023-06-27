import {deserializeIntoOnDemandExecutionOnly} from './deserializeIntoOnDemandExecutionOnly';
import {OnDemandExecutionOnly} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnDemandExecutionOnlyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnDemandExecutionOnly;
}
