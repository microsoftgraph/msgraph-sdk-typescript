import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class ModifiedProperty implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Name of property that was modified.  */
    private _displayName?: string | undefined;
    /** New property value.  */
    private _newValue?: string | undefined;
    /** Old property value.  */
    private _oldValue?: string | undefined;
    /**
     * Instantiates a new modifiedProperty and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the displayName property value. Name of property that was modified.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the newValue property value. New property value.
     * @returns a string
     */
    public get newValue() {
        return this._newValue;
    };
    /**
     * Gets the oldValue property value. Old property value.
     * @returns a string
     */
    public get oldValue() {
        return this._oldValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["displayName", (o, n) => { (o as unknown as ModifiedProperty).displayName = n.getStringValue(); }],
            ["newValue", (o, n) => { (o as unknown as ModifiedProperty).newValue = n.getStringValue(); }],
            ["oldValue", (o, n) => { (o as unknown as ModifiedProperty).oldValue = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("newValue", this.newValue);
        writer.writeStringValue("oldValue", this.oldValue);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the displayName property value. Name of property that was modified.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the newValue property value. New property value.
     * @param value Value to set for the newValue property.
     */
    public set newValue(value: string | undefined) {
        this._newValue = value;
    };
    /**
     * Sets the oldValue property value. Old property value.
     * @param value Value to set for the oldValue property.
     */
    public set oldValue(value: string | undefined) {
        this._oldValue = value;
    };
}
