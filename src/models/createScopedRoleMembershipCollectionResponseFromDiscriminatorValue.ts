import {deserializeIntoScopedRoleMembershipCollectionResponse} from './deserializeIntoScopedRoleMembershipCollectionResponse';
import {ScopedRoleMembershipCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScopedRoleMembershipCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoScopedRoleMembershipCollectionResponse;
}
