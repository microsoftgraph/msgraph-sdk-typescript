import {Identity} from './identity';
import {ScopedRoleMembership} from './scopedRoleMembership';
import {serializeEntity} from './serializeEntity';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeScopedRoleMembership(writer: SerializationWriter, scopedRoleMembership: ScopedRoleMembership | undefined = {} as ScopedRoleMembership) : void {
        serializeEntity(writer, scopedRoleMembership)
        writer.writeStringValue("administrativeUnitId", scopedRoleMembership.administrativeUnitId);
        writer.writeStringValue("roleId", scopedRoleMembership.roleId);
        writer.writeObjectValue<Identity>("roleMemberInfo", scopedRoleMembership.roleMemberInfo, serializeIdentity);
}
