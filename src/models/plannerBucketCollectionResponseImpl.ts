import {createPlannerBucketFromDiscriminatorValue} from './createPlannerBucketFromDiscriminatorValue';
import {PlannerBucketImpl} from './index';
import {PlannerBucket} from './plannerBucket';
import {PlannerBucketCollectionResponse} from './plannerBucketCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerBucketCollectionResponseImpl implements AdditionalDataHolder, Parsable, PlannerBucketCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: PlannerBucket[] | undefined;
    /**
     * Instantiates a new PlannerBucketCollectionResponse and sets the default values.
     * @param plannerBucketCollectionResponseParameterValue 
     */
    public constructor(plannerBucketCollectionResponseParameterValue?: PlannerBucketCollectionResponse | undefined) {
        this.additionalData = plannerBucketCollectionResponseParameterValue?.additionalData ? plannerBucketCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = plannerBucketCollectionResponseParameterValue?.nextLink ;
        this.value = plannerBucketCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<PlannerBucketImpl>(createPlannerBucketFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: PlannerBucketImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new PlannerBucketImpl(element));});
        writer.writeCollectionOfObjectValues<PlannerBucketImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
