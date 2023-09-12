import { createIdentityFromDiscriminatorValue } from './createIdentityFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Identity } from './identity';
import { type ScopedRoleMembership } from './scopedRoleMembership';
import { serializeIdentity } from './serializeIdentity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoScopedRoleMembership(scopedRoleMembership: ScopedRoleMembership | undefined = {} as ScopedRoleMembership) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(scopedRoleMembership),
        "administrativeUnitId": n => { scopedRoleMembership.administrativeUnitId = n.getStringValue(); },
        "roleId": n => { scopedRoleMembership.roleId = n.getStringValue(); },
        "roleMemberInfo": n => { scopedRoleMembership.roleMemberInfo = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
    }
}
