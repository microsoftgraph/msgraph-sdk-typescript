import {deserializeIntoAccessPackageAssignmentRequestWorkflowExtension} from './deserializeIntoAccessPackageAssignmentRequestWorkflowExtension';
import {AccessPackageAssignmentRequestWorkflowExtension} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentRequestWorkflowExtensionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAssignmentRequestWorkflowExtension;
}
