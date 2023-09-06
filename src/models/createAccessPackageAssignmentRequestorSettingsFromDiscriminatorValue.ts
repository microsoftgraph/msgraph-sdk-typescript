import { deserializeIntoAccessPackageAssignmentRequestorSettings } from './deserializeIntoAccessPackageAssignmentRequestorSettings';
import { type AccessPackageAssignmentRequestorSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentRequestorSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAssignmentRequestorSettings;
}
