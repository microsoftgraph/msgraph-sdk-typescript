import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Identity implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The display name of the identity. This property is read-only.  */
    private _displayName?: string | undefined;
    /** The identifier of the identity. This property is read-only.  */
    private _id?: string | undefined;
    /**
     * Instantiates a new identity and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the displayName property value. The display name of the identity. This property is read-only.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the id property value. The identifier of the identity. This property is read-only.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["displayName", (o, n) => { (o as unknown as Identity).displayName = n.getStringValue(); }],
            ["id", (o, n) => { (o as unknown as Identity).id = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("id", this.id);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the displayName property value. The display name of the identity. This property is read-only.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the id property value. The identifier of the identity. This property is read-only.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
}
