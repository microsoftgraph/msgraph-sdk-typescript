import {LicenseAssignmentStateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLicenseAssignmentStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : LicenseAssignmentStateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LicenseAssignmentStateImpl();
}
