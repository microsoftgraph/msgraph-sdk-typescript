import {KeyValue} from './keyValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class KeyValueImpl implements AdditionalDataHolder, KeyValue, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Contains the name of the field that a value is associated with. When a sign in or domain hint is included in the sign-in request, corresponding fields are included as key-value pairs. Possible keys: Login hint present, Domain hint present. */
    public key?: string | undefined;
    /** Contains the corresponding value for the specified key. The value is true if a sign in hint was included in the sign-in request; otherwise false. The value is true if a domain hint was included in the sign-in request; otherwise false. */
    public value?: string | undefined;
    /**
     * Instantiates a new keyValue and sets the default values.
     * @param keyValueParameterValue 
     */
    public constructor(keyValueParameterValue?: KeyValue | undefined) {
        this.additionalData = keyValueParameterValue?.additionalData ? keyValueParameterValue?.additionalData! : {}
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
        writer.writeStringValue("key", this.key);
        }
        if(this.value){
        writer.writeStringValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
