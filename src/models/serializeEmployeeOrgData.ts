import {EmployeeOrgData} from './employeeOrgData';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEmployeeOrgData(employeeOrgData: EmployeeOrgData | undefined = {} as EmployeeOrgData, writer: SerializationWriter) : void {
        writer.writeStringValue("costCenter", employeeOrgData.costCenter);
        writer.writeStringValue("division", employeeOrgData.division);
        writer.writeStringValue("@odata.type", employeeOrgData.odataType);
        writer.writeAdditionalData(employeeOrgData.additionalData);
}
