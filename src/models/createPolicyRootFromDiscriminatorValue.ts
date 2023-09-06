import { deserializeIntoPolicyRoot } from './deserializeIntoPolicyRoot';
import { type PolicyRoot } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPolicyRootFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPolicyRoot;
}
