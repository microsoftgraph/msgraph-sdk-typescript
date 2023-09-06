import { deserializeIntoLicenseAssignmentState } from './deserializeIntoLicenseAssignmentState';
import { type LicenseAssignmentState } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLicenseAssignmentStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLicenseAssignmentState;
}
