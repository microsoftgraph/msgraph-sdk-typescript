import { createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue } from './createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type IdentityUserFlowAttributeAssignment } from './identityUserFlowAttributeAssignment';
import { type IdentityUserFlowAttributeAssignmentCollectionResponse } from './identityUserFlowAttributeAssignmentCollectionResponse';
import { serializeIdentityUserFlowAttributeAssignment } from './serializeIdentityUserFlowAttributeAssignment';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityUserFlowAttributeAssignmentCollectionResponse(identityUserFlowAttributeAssignmentCollectionResponse: IdentityUserFlowAttributeAssignmentCollectionResponse | undefined = {} as IdentityUserFlowAttributeAssignmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(identityUserFlowAttributeAssignmentCollectionResponse),
        "value": n => { identityUserFlowAttributeAssignmentCollectionResponse.value = n.getCollectionOfObjectValues<IdentityUserFlowAttributeAssignment>(createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue); },
    }
}
