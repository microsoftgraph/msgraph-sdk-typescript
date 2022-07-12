import {EdiscoveryCase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryCaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdiscoveryCase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdiscoveryCase();
}
