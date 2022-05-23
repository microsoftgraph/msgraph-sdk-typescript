import {ConditionalAccessPolicy} from './conditionalAccessPolicy';
import {ConditionalAccessPolicyCollectionResponse} from './conditionalAccessPolicyCollectionResponse';
import {createConditionalAccessPolicyFromDiscriminatorValue} from './createConditionalAccessPolicyFromDiscriminatorValue';
import {ConditionalAccessPolicyImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessPolicyCollectionResponseImpl implements AdditionalDataHolder, ConditionalAccessPolicyCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ConditionalAccessPolicy[] | undefined;
    /**
     * Instantiates a new ConditionalAccessPolicyCollectionResponse and sets the default values.
     * @param conditionalAccessPolicyCollectionResponseParameterValue 
     */
    public constructor(conditionalAccessPolicyCollectionResponseParameterValue?: ConditionalAccessPolicyCollectionResponse | undefined) {
        this.additionalData = conditionalAccessPolicyCollectionResponseParameterValue?.additionalData ? conditionalAccessPolicyCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = conditionalAccessPolicyCollectionResponseParameterValue?.nextLink ;
        this.value = conditionalAccessPolicyCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ConditionalAccessPolicyImpl>(createConditionalAccessPolicyFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ConditionalAccessPolicyImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ConditionalAccessPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<ConditionalAccessPolicyImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
