import {deserializeIntoDelegatedAdminRelationshipCustomerParticipant} from './deserializeIntoDelegatedAdminRelationshipCustomerParticipant';
import {DelegatedAdminRelationshipCustomerParticipant} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedAdminRelationshipCustomerParticipantFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedAdminRelationshipCustomerParticipant;
}
