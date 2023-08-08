import type {DelegatedAdminRelationshipRequest} from './delegatedAdminRelationshipRequest';
import {DelegatedAdminRelationshipRequestAction} from './delegatedAdminRelationshipRequestAction';
import {DelegatedAdminRelationshipRequestStatus} from './delegatedAdminRelationshipRequestStatus';
import {serializeEntity} from './serializeEntity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminRelationshipRequest(writer: SerializationWriter, delegatedAdminRelationshipRequest: DelegatedAdminRelationshipRequest | undefined = {} as DelegatedAdminRelationshipRequest) : void {
        serializeEntity(writer, delegatedAdminRelationshipRequest)
        writer.writeEnumValue<DelegatedAdminRelationshipRequestAction>("action", delegatedAdminRelationshipRequest.action);
        writer.writeDateValue("createdDateTime", delegatedAdminRelationshipRequest.createdDateTime);
        writer.writeDateValue("lastModifiedDateTime", delegatedAdminRelationshipRequest.lastModifiedDateTime);
        writer.writeEnumValue<DelegatedAdminRelationshipRequestStatus>("status", delegatedAdminRelationshipRequest.status);
}
