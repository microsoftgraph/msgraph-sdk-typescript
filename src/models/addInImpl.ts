import {AddIn} from './addIn';
import {createKeyValueFromDiscriminatorValue} from './createKeyValueFromDiscriminatorValue';
import {KeyValueImpl} from './index';
import {KeyValue} from './keyValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AddInImpl implements AddIn {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The id property */
    private _id?: string | undefined;
    /** The properties property */
    private _properties?: KeyValue[] | undefined;
    /** The type property */
    private _type?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new addIn and sets the default values.
     * @param addInParameterValue 
     */
    public constructor(addInParameterValue?: AddIn | undefined) {
        this._additionalData = addInParameterValue?.additionalData ? addInParameterValue?.additionalData! : {};
        this._id = addInParameterValue?.id;
        this._properties = addInParameterValue?.properties;
        this._type = addInParameterValue?.type;
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
     * Gets the id property value. The id property
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. The id property
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        if(value) {
            this._id = value;
        }
    };
    /**
     * Gets the properties property value. The properties property
     * @returns a KeyValueInterface
     */
    public get properties() {
        return this._properties;
    };
    /**
     * Sets the properties property value. The properties property
     * @param value Value to set for the properties property.
     */
    public set properties(value: KeyValue[] | undefined) {
        if(value) {
            const propertiesArrValue: KeyValueImpl[] = [];
            this.properties?.forEach(element => {
                propertiesArrValue.push((element instanceof KeyValueImpl? element as KeyValueImpl:new KeyValueImpl(element)));
            });
            this._properties = propertiesArrValue;
        }
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
        if(this.properties && this.properties.length != 0){        const propertiesArrValue: KeyValueImpl[] = [];
        this.properties?.forEach(element => {
            propertiesArrValue.push((element instanceof KeyValueImpl? element as KeyValueImpl:new KeyValueImpl(element)));
        });
            writer.writeCollectionOfObjectValues<KeyValueImpl>("properties", propertiesArrValue);
        }
        if(this.type){
            writer.writeStringValue("type", this.type);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. The type property
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        if(value) {
            this._type = value;
        }
    };
}
