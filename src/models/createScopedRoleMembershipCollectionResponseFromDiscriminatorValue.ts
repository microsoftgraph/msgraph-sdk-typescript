import { deserializeIntoScopedRoleMembershipCollectionResponse } from './deserializeIntoScopedRoleMembershipCollectionResponse';
import { type ScopedRoleMembershipCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createScopedRoleMembershipCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoScopedRoleMembershipCollectionResponse;
}
