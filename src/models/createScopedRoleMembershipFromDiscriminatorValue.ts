import { deserializeIntoScopedRoleMembership } from './deserializeIntoScopedRoleMembership';
import { type ScopedRoleMembership } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createScopedRoleMembershipFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoScopedRoleMembership;
}
