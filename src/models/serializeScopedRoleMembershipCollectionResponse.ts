import type {ScopedRoleMembership} from './scopedRoleMembership';
import type {ScopedRoleMembershipCollectionResponse} from './scopedRoleMembershipCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeScopedRoleMembership} from './serializeScopedRoleMembership';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeScopedRoleMembershipCollectionResponse(writer: SerializationWriter, scopedRoleMembershipCollectionResponse: ScopedRoleMembershipCollectionResponse | undefined = {} as ScopedRoleMembershipCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, scopedRoleMembershipCollectionResponse)
        writer.writeCollectionOfObjectValues<ScopedRoleMembership>("value", scopedRoleMembershipCollectionResponse.value, serializeScopedRoleMembership);
}
