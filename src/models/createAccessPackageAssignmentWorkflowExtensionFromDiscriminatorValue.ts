import { deserializeIntoAccessPackageAssignmentWorkflowExtension } from './deserializeIntoAccessPackageAssignmentWorkflowExtension';
import { type AccessPackageAssignmentWorkflowExtension } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentWorkflowExtensionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAssignmentWorkflowExtension;
}
