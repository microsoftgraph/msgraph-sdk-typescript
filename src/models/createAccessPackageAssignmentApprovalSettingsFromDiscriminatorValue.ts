import { deserializeIntoAccessPackageAssignmentApprovalSettings } from './deserializeIntoAccessPackageAssignmentApprovalSettings';
import { type AccessPackageAssignmentApprovalSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentApprovalSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAssignmentApprovalSettings;
}
