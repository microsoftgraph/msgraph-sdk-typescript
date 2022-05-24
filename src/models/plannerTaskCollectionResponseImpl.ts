import {createPlannerTaskFromDiscriminatorValue} from './createPlannerTaskFromDiscriminatorValue';
import {PlannerTaskImpl} from './index';
import {PlannerTask} from './plannerTask';
import {PlannerTaskCollectionResponse} from './plannerTaskCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerTaskCollectionResponseImpl implements AdditionalDataHolder, Parsable, PlannerTaskCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: PlannerTask[] | undefined;
    /**
     * Instantiates a new PlannerTaskCollectionResponse and sets the default values.
     * @param plannerTaskCollectionResponseParameterValue 
     */
    public constructor(plannerTaskCollectionResponseParameterValue?: PlannerTaskCollectionResponse | undefined) {
        this.additionalData = plannerTaskCollectionResponseParameterValue?.additionalData ? plannerTaskCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = plannerTaskCollectionResponseParameterValue?.nextLink ;
        this.value = plannerTaskCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<PlannerTaskImpl>(createPlannerTaskFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: PlannerTaskImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new PlannerTaskImpl(element));});
        writer.writeCollectionOfObjectValues<PlannerTaskImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
