import {createPlannerPlanFromDiscriminatorValue} from './createPlannerPlanFromDiscriminatorValue';
import {PlannerPlanImpl} from './index';
import {PlannerPlan} from './plannerPlan';
import {PlannerPlanCollectionResponse} from './plannerPlanCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerPlanCollectionResponseImpl implements AdditionalDataHolder, Parsable, PlannerPlanCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: PlannerPlan[] | undefined;
    /**
     * Instantiates a new PlannerPlanCollectionResponse and sets the default values.
     * @param plannerPlanCollectionResponseParameterValue 
     */
    public constructor(plannerPlanCollectionResponseParameterValue?: PlannerPlanCollectionResponse | undefined) {
        this.additionalData = plannerPlanCollectionResponseParameterValue?.additionalData ? plannerPlanCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = plannerPlanCollectionResponseParameterValue?.nextLink ;
        this.value = plannerPlanCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<PlannerPlanImpl>(createPlannerPlanFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: PlannerPlanImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new PlannerPlanImpl(element));});
        writer.writeCollectionOfObjectValues<PlannerPlanImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
