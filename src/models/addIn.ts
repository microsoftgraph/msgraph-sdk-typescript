import {createKeyValueFromDiscriminatorValue} from './createKeyValueFromDiscriminatorValue';
import {KeyValue} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AddIn implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _id?: string | undefined;
    private _odataType?: string | undefined;
    private _properties?: KeyValue[] | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new addIn and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "id": n => { this.id = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "properties": n => { this.properties = n.getCollectionOfObjectValues<KeyValue>(createKeyValueFromDiscriminatorValue); },
            "type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Gets the id property value. 
     * @returns a Guid
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. 
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the properties property value. 
     * @returns a keyValue
     */
    public get properties() {
        return this._properties;
    };
    /**
     * Sets the properties property value. 
     * @param value Value to set for the properties property.
     */
    public set properties(value: KeyValue[] | undefined) {
        this._properties = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<KeyValue>("properties", this.properties);
        writer.writeStringValue("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. 
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. 
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
}
