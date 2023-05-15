import {deserializeIntoScopedRoleMembership} from './deserializeIntoScopedRoleMembership';
import {ScopedRoleMembership} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScopedRoleMembershipFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoScopedRoleMembership;
}
