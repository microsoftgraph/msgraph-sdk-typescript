import {deserializeIntoAccessPackageAssignmentRequestCallbackData} from './deserializeIntoAccessPackageAssignmentRequestCallbackData';
import {AccessPackageAssignmentRequestCallbackData} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentRequestCallbackDataFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAssignmentRequestCallbackData;
}
