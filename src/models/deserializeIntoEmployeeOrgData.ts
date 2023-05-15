import {EmployeeOrgData} from './employeeOrgData';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEmployeeOrgData(employeeOrgData: EmployeeOrgData | undefined = {} as EmployeeOrgData) : Record<string, (node: ParseNode) => void> {
    return {
        "costCenter": n => { employeeOrgData.costCenter = n.getStringValue(); },
        "division": n => { employeeOrgData.division = n.getStringValue(); },
        "@odata.type": n => { employeeOrgData.odataType = n.getStringValue(); },
    }
}
