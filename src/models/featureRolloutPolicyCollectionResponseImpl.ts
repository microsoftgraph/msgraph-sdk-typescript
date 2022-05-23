import {createFeatureRolloutPolicyFromDiscriminatorValue} from './createFeatureRolloutPolicyFromDiscriminatorValue';
import {FeatureRolloutPolicy} from './featureRolloutPolicy';
import {FeatureRolloutPolicyCollectionResponse} from './featureRolloutPolicyCollectionResponse';
import {FeatureRolloutPolicyImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FeatureRolloutPolicyCollectionResponseImpl implements AdditionalDataHolder, FeatureRolloutPolicyCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: FeatureRolloutPolicy[] | undefined;
    /**
     * Instantiates a new FeatureRolloutPolicyCollectionResponse and sets the default values.
     * @param featureRolloutPolicyCollectionResponseParameterValue 
     */
    public constructor(featureRolloutPolicyCollectionResponseParameterValue?: FeatureRolloutPolicyCollectionResponse | undefined) {
        this.additionalData = featureRolloutPolicyCollectionResponseParameterValue?.additionalData ? featureRolloutPolicyCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = featureRolloutPolicyCollectionResponseParameterValue?.nextLink ;
        this.value = featureRolloutPolicyCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<FeatureRolloutPolicyImpl>(createFeatureRolloutPolicyFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: FeatureRolloutPolicyImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new FeatureRolloutPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<FeatureRolloutPolicyImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
