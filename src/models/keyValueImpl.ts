import {KeyValue} from './keyValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class KeyValueImpl implements AdditionalDataHolder, KeyValue, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** Key. */
    key?: string | undefined;
    /** Value. */
    value?: string | undefined;
    /**
     * Instantiates a new keyValue and sets the default values.
     * @param keyValueParameterValue 
     */
    public constructor(keyValueParameterValue?: KeyValue | undefined) {
        this.additionalData = {};
        this.additionalData = keyValueParameterValue?.additionalData ? {} : keyValueParameterValue?.additionalData!
        this.key = keyValueParameterValue?.key ;
        this.value = keyValueParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "key": n => { this.key = n.getStringValue(); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.key){
        if(this.key)
        writer.writeStringValue("key", this.key);
        }
        if(this.value){
        if(this.value)
        writer.writeStringValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
