import {AssignedLicenseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignedLicenseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignedLicenseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignedLicenseImpl();
}
