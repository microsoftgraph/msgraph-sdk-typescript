import { deserializeIntoEmployeeOrgData } from './deserializeIntoEmployeeOrgData';
import { type EmployeeOrgData } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEmployeeOrgDataFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEmployeeOrgData;
}
