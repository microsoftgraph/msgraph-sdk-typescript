import {DelegatedAdminRelationshipRequest} from './delegatedAdminRelationshipRequest';
import {DelegatedAdminRelationshipRequestAction} from './delegatedAdminRelationshipRequestAction';
import {DelegatedAdminRelationshipRequestStatus} from './delegatedAdminRelationshipRequestStatus';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedAdminRelationshipRequest(delegatedAdminRelationshipRequest: DelegatedAdminRelationshipRequest | undefined = {} as DelegatedAdminRelationshipRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(delegatedAdminRelationshipRequest),
        "action": n => { delegatedAdminRelationshipRequest.action = n.getEnumValue<DelegatedAdminRelationshipRequestAction>(DelegatedAdminRelationshipRequestAction); },
        "createdDateTime": n => { delegatedAdminRelationshipRequest.createdDateTime = n.getDateValue(); },
        "lastModifiedDateTime": n => { delegatedAdminRelationshipRequest.lastModifiedDateTime = n.getDateValue(); },
        "status": n => { delegatedAdminRelationshipRequest.status = n.getEnumValue<DelegatedAdminRelationshipRequestStatus>(DelegatedAdminRelationshipRequestStatus); },
    }
}
