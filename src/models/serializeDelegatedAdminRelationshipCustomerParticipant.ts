import {DelegatedAdminRelationshipCustomerParticipant} from './delegatedAdminRelationshipCustomerParticipant';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminRelationshipCustomerParticipant(delegatedAdminRelationshipCustomerParticipant: DelegatedAdminRelationshipCustomerParticipant | undefined = {} as DelegatedAdminRelationshipCustomerParticipant, writer: SerializationWriter) : void {
        writer.writeStringValue("displayName", delegatedAdminRelationshipCustomerParticipant.displayName);
        writer.writeStringValue("@odata.type", delegatedAdminRelationshipCustomerParticipant.odataType);
        writer.writeStringValue("tenantId", delegatedAdminRelationshipCustomerParticipant.tenantId);
        writer.writeAdditionalData(delegatedAdminRelationshipCustomerParticipant.additionalData);
}
