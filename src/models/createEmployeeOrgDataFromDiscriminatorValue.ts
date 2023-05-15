import {deserializeIntoEmployeeOrgData} from './deserializeIntoEmployeeOrgData';
import {EmployeeOrgData} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmployeeOrgDataFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEmployeeOrgData;
}
