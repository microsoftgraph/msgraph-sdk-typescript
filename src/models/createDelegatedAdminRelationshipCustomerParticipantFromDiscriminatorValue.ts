import {DelegatedAdminRelationshipCustomerParticipant} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedAdminRelationshipCustomerParticipantFromDiscriminatorValue(parseNode: ParseNode | undefined) : DelegatedAdminRelationshipCustomerParticipant {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DelegatedAdminRelationshipCustomerParticipant();
}
