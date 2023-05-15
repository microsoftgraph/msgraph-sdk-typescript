import {deserializeIntoEdiscoveryCase} from './deserializeIntoEdiscoveryCase';
import {EdiscoveryCase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryCaseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryCase;
}
