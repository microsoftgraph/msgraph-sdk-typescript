import {ScopedRoleMembershipImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScopedRoleMembershipFromDiscriminatorValue(parseNode: ParseNode | undefined) : ScopedRoleMembershipImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ScopedRoleMembershipImpl();
}
