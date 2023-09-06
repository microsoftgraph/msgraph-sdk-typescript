import { type Identity } from './identity';
import { type ScopedRoleMembership } from './scopedRoleMembership';
import { serializeEntity } from './serializeEntity';
import { serializeIdentity } from './serializeIdentity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeScopedRoleMembership(writer: SerializationWriter, scopedRoleMembership: ScopedRoleMembership | undefined = {} as ScopedRoleMembership) : void {
        serializeEntity(writer, scopedRoleMembership)
        writer.writeStringValue("administrativeUnitId", scopedRoleMembership.administrativeUnitId);
        writer.writeStringValue("roleId", scopedRoleMembership.roleId);
        writer.writeObjectValue<Identity>("roleMemberInfo", scopedRoleMembership.roleMemberInfo, serializeIdentity);
}
