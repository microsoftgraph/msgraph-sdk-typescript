import {deserializeIntoAccessPackageAssignmentReviewSettings} from './deserializeIntoAccessPackageAssignmentReviewSettings';
import {AccessPackageAssignmentReviewSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentReviewSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAssignmentReviewSettings;
}
