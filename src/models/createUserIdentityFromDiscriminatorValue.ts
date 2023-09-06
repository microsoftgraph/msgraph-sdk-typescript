import { deserializeIntoUserIdentity } from './deserializeIntoUserIdentity';
import { type UserIdentity } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserIdentity;
}
