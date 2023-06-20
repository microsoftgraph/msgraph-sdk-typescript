import {DelegatedAdminRelationshipRequest} from './delegatedAdminRelationshipRequest';
import {DelegatedAdminRelationshipRequestAction} from './delegatedAdminRelationshipRequestAction';
import {DelegatedAdminRelationshipRequestStatus} from './delegatedAdminRelationshipRequestStatus';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminRelationshipRequest(delegatedAdminRelationshipRequest: DelegatedAdminRelationshipRequest | undefined = {} as DelegatedAdminRelationshipRequest, writer: SerializationWriter) : void {
        serializeEntity(writer, delegatedAdminRelationshipRequest)
        writer.writeEnumValue<DelegatedAdminRelationshipRequestAction>("action", delegatedAdminRelationshipRequest.action);
        writer.writeDateValue("createdDateTime", delegatedAdminRelationshipRequest.createdDateTime);
        writer.writeDateValue("lastModifiedDateTime", delegatedAdminRelationshipRequest.lastModifiedDateTime);
        writer.writeEnumValue<DelegatedAdminRelationshipRequestStatus>("status", delegatedAdminRelationshipRequest.status);
}
