import {EmployeeOrgData} from './employeeOrgData';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EmployeeOrgDataImpl implements AdditionalDataHolder, EmployeeOrgData, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The cost center associated with the user. Returned only on $select. Supports $filter. */
    public costCenter?: string | undefined;
    /** The name of the division in which the user works. Returned only on $select. Supports $filter. */
    public division?: string | undefined;
    /**
     * Instantiates a new employeeOrgData and sets the default values.
     * @param employeeOrgDataParameterValue 
     */
    public constructor(employeeOrgDataParameterValue?: EmployeeOrgData | undefined) {
        this.additionalData = employeeOrgDataParameterValue?.additionalData ? employeeOrgDataParameterValue?.additionalData! : {}
        this.costCenter = employeeOrgDataParameterValue?.costCenter ;
        this.division = employeeOrgDataParameterValue?.division ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "costCenter": n => { this.costCenter = n.getStringValue(); },
            "division": n => { this.division = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.costCenter){
        writer.writeStringValue("costCenter", this.costCenter);
        }
        if(this.division){
        writer.writeStringValue("division", this.division);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
