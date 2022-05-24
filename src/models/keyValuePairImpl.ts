import {KeyValuePair} from './keyValuePair';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class KeyValuePairImpl implements AdditionalDataHolder, KeyValuePair, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Name for this key-value pair */
    public name?: string | undefined;
    /** Value for this key-value pair */
    public value?: string | undefined;
    /**
     * Instantiates a new keyValuePair and sets the default values.
     * @param keyValuePairParameterValue 
     */
    public constructor(keyValuePairParameterValue?: KeyValuePair | undefined) {
        this.additionalData = keyValuePairParameterValue?.additionalData ? keyValuePairParameterValue?.additionalData! : {}
        this.name = keyValuePairParameterValue?.name ;
        this.value = keyValuePairParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "name": n => { this.name = n.getStringValue(); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.value){
        writer.writeStringValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
