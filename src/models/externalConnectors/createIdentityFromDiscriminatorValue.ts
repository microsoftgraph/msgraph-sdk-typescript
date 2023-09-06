import { deserializeIntoIdentity } from './deserializeIntoIdentity';
import { type Identity } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentity;
}
