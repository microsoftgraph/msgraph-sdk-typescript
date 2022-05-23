import {AssignedPlan} from './assignedPlan';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AssignedPlanImpl implements AdditionalDataHolder, AssignedPlan, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The date and time at which the plan was assigned; for example: 2013-01-02T19:32:30Z. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public assignedDateTime?: Date | undefined;
    /** Condition of the capability assignment. The possible values are Enabled, Warning, Suspended, Deleted, LockedOut. */
    public capabilityStatus?: string | undefined;
    /** The name of the service; for example, exchange. */
    public service?: string | undefined;
    /** A GUID that identifies the service plan. For a complete list of GUIDs and their equivalent friendly service names, see Product names and service plan identifiers for licensing. */
    public servicePlanId?: string | undefined;
    /**
     * Instantiates a new assignedPlan and sets the default values.
     * @param assignedPlanParameterValue 
     */
    public constructor(assignedPlanParameterValue?: AssignedPlan | undefined) {
        this.additionalData = assignedPlanParameterValue?.additionalData ? assignedPlanParameterValue?.additionalData! : {}
        this.assignedDateTime = assignedPlanParameterValue?.assignedDateTime ;
        this.capabilityStatus = assignedPlanParameterValue?.capabilityStatus ;
        this.service = assignedPlanParameterValue?.service ;
        this.servicePlanId = assignedPlanParameterValue?.servicePlanId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "assignedDateTime": n => { this.assignedDateTime = n.getDateValue(); },
            "capabilityStatus": n => { this.capabilityStatus = n.getStringValue(); },
            "service": n => { this.service = n.getStringValue(); },
            "servicePlanId": n => { this.servicePlanId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.assignedDateTime){
        writer.writeDateValue("assignedDateTime", this.assignedDateTime);
        }
        if(this.capabilityStatus){
        writer.writeStringValue("capabilityStatus", this.capabilityStatus);
        }
        if(this.service){
        writer.writeStringValue("service", this.service);
        }
        if(this.servicePlanId){
        writer.writeStringValue("servicePlanId", this.servicePlanId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
