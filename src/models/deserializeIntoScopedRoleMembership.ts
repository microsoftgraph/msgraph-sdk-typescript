import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Identity} from './identity';
import {ScopedRoleMembership} from './scopedRoleMembership';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoScopedRoleMembership(scopedRoleMembership: ScopedRoleMembership | undefined = {} as ScopedRoleMembership) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(scopedRoleMembership),
        "administrativeUnitId": n => { scopedRoleMembership.administrativeUnitId = n.getStringValue(); },
        "roleId": n => { scopedRoleMembership.roleId = n.getStringValue(); },
        "roleMemberInfo": n => { scopedRoleMembership.roleMemberInfo = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
    }
}
