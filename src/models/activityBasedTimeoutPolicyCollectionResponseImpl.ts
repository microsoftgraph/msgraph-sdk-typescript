import {ActivityBasedTimeoutPolicy} from './activityBasedTimeoutPolicy';
import {ActivityBasedTimeoutPolicyCollectionResponse} from './activityBasedTimeoutPolicyCollectionResponse';
import {createActivityBasedTimeoutPolicyFromDiscriminatorValue} from './createActivityBasedTimeoutPolicyFromDiscriminatorValue';
import {ActivityBasedTimeoutPolicyImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ActivityBasedTimeoutPolicyCollectionResponseImpl implements ActivityBasedTimeoutPolicyCollectionResponse, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ActivityBasedTimeoutPolicy[] | undefined;
    /**
     * Instantiates a new ActivityBasedTimeoutPolicyCollectionResponse and sets the default values.
     * @param activityBasedTimeoutPolicyCollectionResponseParameterValue 
     */
    public constructor(activityBasedTimeoutPolicyCollectionResponseParameterValue?: ActivityBasedTimeoutPolicyCollectionResponse | undefined) {
        this.additionalData = activityBasedTimeoutPolicyCollectionResponseParameterValue?.additionalData ? activityBasedTimeoutPolicyCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = activityBasedTimeoutPolicyCollectionResponseParameterValue?.nextLink ;
        this.value = activityBasedTimeoutPolicyCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ActivityBasedTimeoutPolicyImpl>(createActivityBasedTimeoutPolicyFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ActivityBasedTimeoutPolicyImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ActivityBasedTimeoutPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<ActivityBasedTimeoutPolicyImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
