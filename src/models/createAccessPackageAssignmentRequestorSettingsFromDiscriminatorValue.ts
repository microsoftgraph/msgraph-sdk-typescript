import {AccessPackageAssignmentRequestorSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentRequestorSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageAssignmentRequestorSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageAssignmentRequestorSettingsImpl();
}
