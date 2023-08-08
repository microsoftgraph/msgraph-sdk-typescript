import {createScopedRoleMembershipFromDiscriminatorValue} from './createScopedRoleMembershipFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {ScopedRoleMembership} from './scopedRoleMembership';
import type {ScopedRoleMembershipCollectionResponse} from './scopedRoleMembershipCollectionResponse';
import {serializeScopedRoleMembership} from './serializeScopedRoleMembership';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoScopedRoleMembershipCollectionResponse(scopedRoleMembershipCollectionResponse: ScopedRoleMembershipCollectionResponse | undefined = {} as ScopedRoleMembershipCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(scopedRoleMembershipCollectionResponse),
        "value": n => { scopedRoleMembershipCollectionResponse.value = n.getCollectionOfObjectValues<ScopedRoleMembership>(createScopedRoleMembershipFromDiscriminatorValue); },
    }
}
