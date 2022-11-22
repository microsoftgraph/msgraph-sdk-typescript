import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PersonType implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The type of data source, such as Person. */
    private _class_escaped?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The secondary type of data source, such as OrganizationUser. */
    private _subclass?: string | undefined;
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
     * Gets the class property value. The type of data source, such as Person.
     * @returns a string
     */
    public get class_escaped() {
        return this._class_escaped;
    };
    /**
     * Sets the class property value. The type of data source, such as Person.
     * @param value Value to set for the class_escaped property.
     */
    public set class_escaped(value: string | undefined) {
        this._class_escaped = value;
    };
    /**
     * Instantiates a new personType and sets the default values.
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
            "class": n => { this.class_escaped = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "subclass": n => { this.subclass = n.getStringValue(); },
        };
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("class", this.class_escaped);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("subclass", this.subclass);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the subclass property value. The secondary type of data source, such as OrganizationUser.
     * @returns a string
     */
    public get subclass() {
        return this._subclass;
    };
    /**
     * Sets the subclass property value. The secondary type of data source, such as OrganizationUser.
     * @param value Value to set for the subclass property.
     */
    public set subclass(value: string | undefined) {
        this._subclass = value;
    };
}
