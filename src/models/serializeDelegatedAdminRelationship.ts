import {DelegatedAdminAccessAssignment} from './delegatedAdminAccessAssignment';
import {DelegatedAdminAccessDetails} from './delegatedAdminAccessDetails';
import {DelegatedAdminRelationship} from './delegatedAdminRelationship';
import {DelegatedAdminRelationshipCustomerParticipant} from './delegatedAdminRelationshipCustomerParticipant';
import {DelegatedAdminRelationshipOperation} from './delegatedAdminRelationshipOperation';
import {DelegatedAdminRelationshipRequest} from './delegatedAdminRelationshipRequest';
import {DelegatedAdminRelationshipStatus} from './delegatedAdminRelationshipStatus';
import {serializeDelegatedAdminAccessAssignment} from './serializeDelegatedAdminAccessAssignment';
import {serializeDelegatedAdminAccessDetails} from './serializeDelegatedAdminAccessDetails';
import {serializeDelegatedAdminRelationshipCustomerParticipant} from './serializeDelegatedAdminRelationshipCustomerParticipant';
import {serializeDelegatedAdminRelationshipOperation} from './serializeDelegatedAdminRelationshipOperation';
import {serializeDelegatedAdminRelationshipRequest} from './serializeDelegatedAdminRelationshipRequest';
import {serializeEntity} from './serializeEntity';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminRelationship(writer: SerializationWriter, delegatedAdminRelationship: DelegatedAdminRelationship | undefined = {} as DelegatedAdminRelationship) : void {
        serializeEntity(writer, delegatedAdminRelationship)
        writer.writeCollectionOfObjectValues<DelegatedAdminAccessAssignment>("accessAssignments", delegatedAdminRelationship.accessAssignments, serializeDelegatedAdminAccessAssignment);
        writer.writeObjectValue<DelegatedAdminAccessDetails>("accessDetails", delegatedAdminRelationship.accessDetails, serializeDelegatedAdminAccessDetails);
        writer.writeDateValue("activatedDateTime", delegatedAdminRelationship.activatedDateTime);
        writer.writeDateValue("createdDateTime", delegatedAdminRelationship.createdDateTime);
        writer.writeObjectValue<DelegatedAdminRelationshipCustomerParticipant>("customer", delegatedAdminRelationship.customer, serializeDelegatedAdminRelationshipCustomerParticipant);
        writer.writeStringValue("displayName", delegatedAdminRelationship.displayName);
        writer.writeDurationValue("duration", delegatedAdminRelationship.duration);
        writer.writeDateValue("endDateTime", delegatedAdminRelationship.endDateTime);
        writer.writeDateValue("lastModifiedDateTime", delegatedAdminRelationship.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<DelegatedAdminRelationshipOperation>("operations", delegatedAdminRelationship.operations, serializeDelegatedAdminRelationshipOperation);
        writer.writeCollectionOfObjectValues<DelegatedAdminRelationshipRequest>("requests", delegatedAdminRelationship.requests, serializeDelegatedAdminRelationshipRequest);
        writer.writeEnumValue<DelegatedAdminRelationshipStatus>("status", delegatedAdminRelationship.status);
}
