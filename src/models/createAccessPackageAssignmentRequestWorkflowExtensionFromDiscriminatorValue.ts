import { deserializeIntoAccessPackageAssignmentRequestWorkflowExtension } from './deserializeIntoAccessPackageAssignmentRequestWorkflowExtension';
import { type AccessPackageAssignmentRequestWorkflowExtension } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentRequestWorkflowExtensionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAssignmentRequestWorkflowExtension;
}
