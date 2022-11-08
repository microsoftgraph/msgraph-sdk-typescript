import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** A class containing the properties for Audit Property. */
export class AuditProperty implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Display name. */
    private _displayName?: string | undefined;
    /** New value. */
    private _newValue?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Old value. */
    private _oldValue?: string | undefined;
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
     * Instantiates a new auditProperty and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.auditProperty";
    };
    /**
     * Gets the displayName property value. Display name.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "newValue": n => { this.newValue = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "oldValue": n => { this.oldValue = n.getStringValue(); },
        };
    };
    /**
     * Gets the newValue property value. New value.
     * @returns a string
     */
    public get newValue() {
        return this._newValue;
    };
    /**
     * Sets the newValue property value. New value.
     * @param value Value to set for the newValue property.
     */
    public set newValue(value: string | undefined) {
        this._newValue = value;
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
     * Gets the oldValue property value. Old value.
     * @returns a string
     */
    public get oldValue() {
        return this._oldValue;
    };
    /**
     * Sets the oldValue property value. Old value.
     * @param value Value to set for the oldValue property.
     */
    public set oldValue(value: string | undefined) {
        this._oldValue = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("newValue", this.newValue);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("oldValue", this.oldValue);
        writer.writeAdditionalData(this.additionalData);
    };
}
