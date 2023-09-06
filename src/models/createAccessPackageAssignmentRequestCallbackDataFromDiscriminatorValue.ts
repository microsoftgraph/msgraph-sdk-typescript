import { deserializeIntoAccessPackageAssignmentRequestCallbackData } from './deserializeIntoAccessPackageAssignmentRequestCallbackData';
import { type AccessPackageAssignmentRequestCallbackData } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentRequestCallbackDataFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAssignmentRequestCallbackData;
}
