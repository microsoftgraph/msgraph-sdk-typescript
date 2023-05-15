import {deserializeIntoPolicyRoot} from './deserializeIntoPolicyRoot';
import {PolicyRoot} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPolicyRootFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPolicyRoot;
}
