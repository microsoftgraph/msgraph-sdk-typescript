import {EdiscoveryHoldOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryHoldOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdiscoveryHoldOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdiscoveryHoldOperation();
}
