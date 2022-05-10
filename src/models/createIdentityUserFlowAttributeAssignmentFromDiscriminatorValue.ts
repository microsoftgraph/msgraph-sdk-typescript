import {IdentityUserFlowAttributeAssignmentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityUserFlowAttributeAssignmentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityUserFlowAttributeAssignmentImpl();
}
