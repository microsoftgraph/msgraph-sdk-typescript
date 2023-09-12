import { deserializeIntoAppIdentity } from './deserializeIntoAppIdentity';
import { type AppIdentity } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAppIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppIdentity;
}
