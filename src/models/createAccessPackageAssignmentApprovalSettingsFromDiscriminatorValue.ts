import {AccessPackageAssignmentApprovalSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentApprovalSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageAssignmentApprovalSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageAssignmentApprovalSettingsImpl();
}
