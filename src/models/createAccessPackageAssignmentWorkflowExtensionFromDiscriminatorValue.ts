import {deserializeIntoAccessPackageAssignmentWorkflowExtension} from './deserializeIntoAccessPackageAssignmentWorkflowExtension';
import {AccessPackageAssignmentWorkflowExtension} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentWorkflowExtensionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAssignmentWorkflowExtension;
}
