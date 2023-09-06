import { deserializeIntoIdentityProtectionRoot } from './deserializeIntoIdentityProtectionRoot';
import { type IdentityProtectionRoot } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIdentityProtectionRootFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentityProtectionRoot;
}
