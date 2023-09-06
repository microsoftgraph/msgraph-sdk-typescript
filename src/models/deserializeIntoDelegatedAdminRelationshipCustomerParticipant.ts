import { type DelegatedAdminRelationshipCustomerParticipant } from './delegatedAdminRelationshipCustomerParticipant';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedAdminRelationshipCustomerParticipant(delegatedAdminRelationshipCustomerParticipant: DelegatedAdminRelationshipCustomerParticipant | undefined = {} as DelegatedAdminRelationshipCustomerParticipant) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { delegatedAdminRelationshipCustomerParticipant.displayName = n.getStringValue(); },
        "@odata.type": n => { delegatedAdminRelationshipCustomerParticipant.odataType = n.getStringValue(); },
        "tenantId": n => { delegatedAdminRelationshipCustomerParticipant.tenantId = n.getStringValue(); },
    }
}
