import {PlannerContainerType} from './plannerContainerType';
import {PlannerPlanContainer} from './plannerPlanContainer';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerPlanContainerImpl implements AdditionalDataHolder, Parsable, PlannerPlanContainer {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The identifier of the resource that contains the plan. */
    public containerId?: string | undefined;
    /** The type of the resource that contains the plan. See the previous table for supported types. Possible values are: group, unknownFutureValue, roster. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value in this evolvable enum: roster. */
    public type?: PlannerContainerType | undefined;
    /** The full canonical URL of the container. */
    public url?: string | undefined;
    /**
     * Instantiates a new plannerPlanContainer and sets the default values.
     * @param plannerPlanContainerParameterValue 
     */
    public constructor(plannerPlanContainerParameterValue?: PlannerPlanContainer | undefined) {
        this.additionalData = plannerPlanContainerParameterValue?.additionalData ? plannerPlanContainerParameterValue?.additionalData! : {}
        this.containerId = plannerPlanContainerParameterValue?.containerId ;
        this.type = plannerPlanContainerParameterValue?.type ;
        this.url = plannerPlanContainerParameterValue?.url ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "containerId": n => { this.containerId = n.getStringValue(); },
            "type": n => { this.type = n.getEnumValue<PlannerContainerType>(PlannerContainerType); },
            "url": n => { this.url = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.containerId){
        writer.writeStringValue("containerId", this.containerId);
        }
        if(this.type){
        writer.writeEnumValue<PlannerContainerType>("type", this.type);
        }
        if(this.url){
        writer.writeStringValue("url", this.url);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
