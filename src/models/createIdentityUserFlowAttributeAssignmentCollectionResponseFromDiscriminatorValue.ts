import {IdentityUserFlowAttributeAssignmentCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityUserFlowAttributeAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityUserFlowAttributeAssignmentCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityUserFlowAttributeAssignmentCollectionResponseImpl();
}
