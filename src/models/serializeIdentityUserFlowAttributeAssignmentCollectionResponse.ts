import type {IdentityUserFlowAttributeAssignment} from './identityUserFlowAttributeAssignment';
import type {IdentityUserFlowAttributeAssignmentCollectionResponse} from './identityUserFlowAttributeAssignmentCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIdentityUserFlowAttributeAssignment} from './serializeIdentityUserFlowAttributeAssignment';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityUserFlowAttributeAssignmentCollectionResponse(writer: SerializationWriter, identityUserFlowAttributeAssignmentCollectionResponse: IdentityUserFlowAttributeAssignmentCollectionResponse | undefined = {} as IdentityUserFlowAttributeAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, identityUserFlowAttributeAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<IdentityUserFlowAttributeAssignment>("value", identityUserFlowAttributeAssignmentCollectionResponse.value, serializeIdentityUserFlowAttributeAssignment);
}
