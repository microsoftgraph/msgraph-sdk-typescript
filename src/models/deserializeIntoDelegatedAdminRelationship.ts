import { createDelegatedAdminAccessAssignmentFromDiscriminatorValue } from './createDelegatedAdminAccessAssignmentFromDiscriminatorValue';
import { createDelegatedAdminAccessDetailsFromDiscriminatorValue } from './createDelegatedAdminAccessDetailsFromDiscriminatorValue';
import { createDelegatedAdminRelationshipCustomerParticipantFromDiscriminatorValue } from './createDelegatedAdminRelationshipCustomerParticipantFromDiscriminatorValue';
import { createDelegatedAdminRelationshipOperationFromDiscriminatorValue } from './createDelegatedAdminRelationshipOperationFromDiscriminatorValue';
import { createDelegatedAdminRelationshipRequestFromDiscriminatorValue } from './createDelegatedAdminRelationshipRequestFromDiscriminatorValue';
import { type DelegatedAdminAccessAssignment } from './delegatedAdminAccessAssignment';
import { type DelegatedAdminAccessDetails } from './delegatedAdminAccessDetails';
import { type DelegatedAdminRelationship } from './delegatedAdminRelationship';
import { type DelegatedAdminRelationshipCustomerParticipant } from './delegatedAdminRelationshipCustomerParticipant';
import { type DelegatedAdminRelationshipOperation } from './delegatedAdminRelationshipOperation';
import { type DelegatedAdminRelationshipRequest } from './delegatedAdminRelationshipRequest';
import { DelegatedAdminRelationshipStatus } from './delegatedAdminRelationshipStatus';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeDelegatedAdminAccessAssignment } from './serializeDelegatedAdminAccessAssignment';
import { serializeDelegatedAdminAccessDetails } from './serializeDelegatedAdminAccessDetails';
import { serializeDelegatedAdminRelationshipCustomerParticipant } from './serializeDelegatedAdminRelationshipCustomerParticipant';
import { serializeDelegatedAdminRelationshipOperation } from './serializeDelegatedAdminRelationshipOperation';
import { serializeDelegatedAdminRelationshipRequest } from './serializeDelegatedAdminRelationshipRequest';
import { Duration, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedAdminRelationship(delegatedAdminRelationship: DelegatedAdminRelationship | undefined = {} as DelegatedAdminRelationship) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(delegatedAdminRelationship),
        "accessAssignments": n => { delegatedAdminRelationship.accessAssignments = n.getCollectionOfObjectValues<DelegatedAdminAccessAssignment>(createDelegatedAdminAccessAssignmentFromDiscriminatorValue); },
        "accessDetails": n => { delegatedAdminRelationship.accessDetails = n.getObjectValue<DelegatedAdminAccessDetails>(createDelegatedAdminAccessDetailsFromDiscriminatorValue); },
        "activatedDateTime": n => { delegatedAdminRelationship.activatedDateTime = n.getDateValue(); },
        "createdDateTime": n => { delegatedAdminRelationship.createdDateTime = n.getDateValue(); },
        "customer": n => { delegatedAdminRelationship.customer = n.getObjectValue<DelegatedAdminRelationshipCustomerParticipant>(createDelegatedAdminRelationshipCustomerParticipantFromDiscriminatorValue); },
        "displayName": n => { delegatedAdminRelationship.displayName = n.getStringValue(); },
        "duration": n => { delegatedAdminRelationship.duration = n.getDurationValue(); },
        "endDateTime": n => { delegatedAdminRelationship.endDateTime = n.getDateValue(); },
        "lastModifiedDateTime": n => { delegatedAdminRelationship.lastModifiedDateTime = n.getDateValue(); },
        "operations": n => { delegatedAdminRelationship.operations = n.getCollectionOfObjectValues<DelegatedAdminRelationshipOperation>(createDelegatedAdminRelationshipOperationFromDiscriminatorValue); },
        "requests": n => { delegatedAdminRelationship.requests = n.getCollectionOfObjectValues<DelegatedAdminRelationshipRequest>(createDelegatedAdminRelationshipRequestFromDiscriminatorValue); },
        "status": n => { delegatedAdminRelationship.status = n.getEnumValue<DelegatedAdminRelationshipStatus>(DelegatedAdminRelationshipStatus); },
    }
}
