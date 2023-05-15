import {deserializeIntoAccessPackageAssignmentApprovalSettings} from './deserializeIntoAccessPackageAssignmentApprovalSettings';
import {AccessPackageAssignmentApprovalSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentApprovalSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAssignmentApprovalSettings;
}
