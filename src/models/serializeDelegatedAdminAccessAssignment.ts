import type {DelegatedAdminAccessAssignment} from './delegatedAdminAccessAssignment';
import {DelegatedAdminAccessAssignmentStatus} from './delegatedAdminAccessAssignmentStatus';
import type {DelegatedAdminAccessContainer} from './delegatedAdminAccessContainer';
import type {DelegatedAdminAccessDetails} from './delegatedAdminAccessDetails';
import {serializeDelegatedAdminAccessContainer} from './serializeDelegatedAdminAccessContainer';
import {serializeDelegatedAdminAccessDetails} from './serializeDelegatedAdminAccessDetails';
import {serializeEntity} from './serializeEntity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminAccessAssignment(writer: SerializationWriter, delegatedAdminAccessAssignment: DelegatedAdminAccessAssignment | undefined = {} as DelegatedAdminAccessAssignment) : void {
        serializeEntity(writer, delegatedAdminAccessAssignment)
        writer.writeObjectValue<DelegatedAdminAccessContainer>("accessContainer", delegatedAdminAccessAssignment.accessContainer, serializeDelegatedAdminAccessContainer);
        writer.writeObjectValue<DelegatedAdminAccessDetails>("accessDetails", delegatedAdminAccessAssignment.accessDetails, serializeDelegatedAdminAccessDetails);
        writer.writeDateValue("createdDateTime", delegatedAdminAccessAssignment.createdDateTime);
        writer.writeDateValue("lastModifiedDateTime", delegatedAdminAccessAssignment.lastModifiedDateTime);
        writer.writeEnumValue<DelegatedAdminAccessAssignmentStatus>("status", delegatedAdminAccessAssignment.status);
}
