import { deserializeIntoAssignedLicense } from './deserializeIntoAssignedLicense';
import { type AssignedLicense } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAssignedLicenseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAssignedLicense;
}
