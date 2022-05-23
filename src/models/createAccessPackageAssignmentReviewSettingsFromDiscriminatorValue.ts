import {AccessPackageAssignmentReviewSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentReviewSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageAssignmentReviewSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageAssignmentReviewSettingsImpl();
}
