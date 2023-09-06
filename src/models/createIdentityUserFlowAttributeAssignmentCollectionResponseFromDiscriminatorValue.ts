import { deserializeIntoIdentityUserFlowAttributeAssignmentCollectionResponse } from './deserializeIntoIdentityUserFlowAttributeAssignmentCollectionResponse';
import { type IdentityUserFlowAttributeAssignmentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIdentityUserFlowAttributeAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentityUserFlowAttributeAssignmentCollectionResponse;
}
