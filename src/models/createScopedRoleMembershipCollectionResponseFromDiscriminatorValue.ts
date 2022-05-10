import {ScopedRoleMembershipCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScopedRoleMembershipCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ScopedRoleMembershipCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ScopedRoleMembershipCollectionResponseImpl();
}
