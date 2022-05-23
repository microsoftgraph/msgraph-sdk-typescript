import {EmployeeOrgDataImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmployeeOrgDataFromDiscriminatorValue(parseNode: ParseNode | undefined) : EmployeeOrgDataImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EmployeeOrgDataImpl();
}
