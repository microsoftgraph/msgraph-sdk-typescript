import {DelegatedAdminRelationshipCustomerParticipant} from './delegatedAdminRelationshipCustomerParticipant';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminRelationshipCustomerParticipant(writer: SerializationWriter, delegatedAdminRelationshipCustomerParticipant: DelegatedAdminRelationshipCustomerParticipant | undefined = {} as DelegatedAdminRelationshipCustomerParticipant) : void {
        writer.writeStringValue("displayName", delegatedAdminRelationshipCustomerParticipant.displayName);
        writer.writeStringValue("@odata.type", delegatedAdminRelationshipCustomerParticipant.odataType);
        writer.writeStringValue("tenantId", delegatedAdminRelationshipCustomerParticipant.tenantId);
        writer.writeAdditionalData(delegatedAdminRelationshipCustomerParticipant.additionalData);
}
