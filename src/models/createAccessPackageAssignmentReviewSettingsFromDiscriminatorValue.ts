import { deserializeIntoAccessPackageAssignmentReviewSettings } from './deserializeIntoAccessPackageAssignmentReviewSettings';
import { type AccessPackageAssignmentReviewSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentReviewSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAssignmentReviewSettings;
}
