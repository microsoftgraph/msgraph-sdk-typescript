import {AddIn} from './addIn';
import {createKeyValueFromDiscriminatorValue} from './createKeyValueFromDiscriminatorValue';
import {KeyValueImpl} from './index';
import {KeyValue} from './keyValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AddInImpl implements AddIn, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The id property */
    public id?: string | undefined;
    /** The properties property */
    public properties?: KeyValue[] | undefined;
    /** The type property */
    public type?: string | undefined;
    /**
     * Instantiates a new addIn and sets the default values.
     * @param addInParameterValue 
     */
    public constructor(addInParameterValue?: AddIn | undefined) {
        this.additionalData = addInParameterValue?.additionalData ? addInParameterValue?.additionalData! : {}
        this.id = addInParameterValue?.id ;
        this.properties = addInParameterValue?.properties ;
        this.type = addInParameterValue?.type ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "id": n => { this.id = n.getStringValue(); },
            "properties": n => { this.properties = n.getCollectionOfObjectValues<KeyValueImpl>(createKeyValueFromDiscriminatorValue); },
            "type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.id){
        writer.writeStringValue("id", this.id);
        }
        if(this.properties && this.properties.length != 0){        const propertiesArrValue: KeyValueImpl[] = []; this.properties?.forEach(element => {propertiesArrValue.push(new KeyValueImpl(element));});
        writer.writeCollectionOfObjectValues<KeyValueImpl>("properties", propertiesArrValue);
        }
        if(this.type){
        writer.writeStringValue("type", this.type);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
