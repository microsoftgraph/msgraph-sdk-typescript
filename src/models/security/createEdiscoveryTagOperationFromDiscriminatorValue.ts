import {deserializeIntoEdiscoveryTagOperation} from './deserializeIntoEdiscoveryTagOperation';
import {EdiscoveryTagOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryTagOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryTagOperation;
}
