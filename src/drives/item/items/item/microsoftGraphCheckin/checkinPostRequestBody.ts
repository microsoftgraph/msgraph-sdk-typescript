import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CheckinPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _checkInAs?: string | undefined;
    private _comment?: string | undefined;
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
     * Gets the checkInAs property value. 
     * @returns a string
     */
    public get checkInAs() {
        return this._checkInAs;
    };
    /**
     * Sets the checkInAs property value. 
     * @param value Value to set for the checkInAs property.
     */
    public set checkInAs(value: string | undefined) {
        this._checkInAs = value;
    };
    /**
     * Gets the comment property value. 
     * @returns a string
     */
    public get comment() {
        return this._comment;
    };
    /**
     * Sets the comment property value. 
     * @param value Value to set for the comment property.
     */
    public set comment(value: string | undefined) {
        this._comment = value;
    };
    /**
     * Instantiates a new checkinPostRequestBody and sets the default values.
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
            "checkInAs": n => { this.checkInAs = n.getStringValue(); },
            "comment": n => { this.comment = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("checkInAs", this.checkInAs);
        writer.writeStringValue("comment", this.comment);
        writer.writeAdditionalData(this.additionalData);
    };
}
