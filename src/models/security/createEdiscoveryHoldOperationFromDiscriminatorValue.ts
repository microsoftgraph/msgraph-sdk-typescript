import {deserializeIntoEdiscoveryHoldOperation} from './deserializeIntoEdiscoveryHoldOperation';
import {EdiscoveryHoldOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryHoldOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryHoldOperation;
}
