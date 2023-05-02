import {deserializeIntoAssignedLicense} from './deserializeIntoAssignedLicense';
import {AssignedLicense} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignedLicenseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAssignedLicense;
}
