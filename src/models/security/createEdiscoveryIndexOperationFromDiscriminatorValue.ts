import {EdiscoveryIndexOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryIndexOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdiscoveryIndexOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdiscoveryIndexOperation();
}
