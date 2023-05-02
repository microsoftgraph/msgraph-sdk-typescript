import {createScopedRoleMembershipFromDiscriminatorValue} from './createScopedRoleMembershipFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {ScopedRoleMembership} from './scopedRoleMembership';
import {ScopedRoleMembershipCollectionResponse} from './scopedRoleMembershipCollectionResponse';
import {serializeScopedRoleMembership} from './serializeScopedRoleMembership';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoScopedRoleMembershipCollectionResponse(scopedRoleMembershipCollectionResponse: ScopedRoleMembershipCollectionResponse | undefined = {} as ScopedRoleMembershipCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(scopedRoleMembershipCollectionResponse),
        "value": n => { scopedRoleMembershipCollectionResponse.value = n.getCollectionOfObjectValues<ScopedRoleMembership>(createScopedRoleMembershipFromDiscriminatorValue); },
    }
}
