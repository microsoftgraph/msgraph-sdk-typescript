import { type EmployeeOrgData } from './employeeOrgData';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEmployeeOrgData(writer: SerializationWriter, employeeOrgData: EmployeeOrgData | undefined = {} as EmployeeOrgData) : void {
        writer.writeStringValue("costCenter", employeeOrgData.costCenter);
        writer.writeStringValue("division", employeeOrgData.division);
        writer.writeStringValue("@odata.type", employeeOrgData.odataType);
        writer.writeAdditionalData(employeeOrgData.additionalData);
}
