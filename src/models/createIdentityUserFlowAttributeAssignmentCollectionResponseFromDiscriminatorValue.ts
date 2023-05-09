import {deserializeIntoIdentityUserFlowAttributeAssignmentCollectionResponse} from './deserializeIntoIdentityUserFlowAttributeAssignmentCollectionResponse';
import {IdentityUserFlowAttributeAssignmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityUserFlowAttributeAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentityUserFlowAttributeAssignmentCollectionResponse;
}
