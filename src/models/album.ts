import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Album implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** Unique identifier of the [driveItem][] that is the cover of the album.  */
    private _coverImageItemId?: string | undefined;
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
     * Instantiates a new album and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the coverImageItemId property value. Unique identifier of the [driveItem][] that is the cover of the album.
     * @returns a string
     */
    public get coverImageItemId() {
        return this._coverImageItemId;
    };
    /**
     * Sets the coverImageItemId property value. Unique identifier of the [driveItem][] that is the cover of the album.
     * @param value Value to set for the coverImageItemId property.
     */
    public set coverImageItemId(value: string | undefined) {
        this._coverImageItemId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "coverImageItemId": n => { this.coverImageItemId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("coverImageItemId", this.coverImageItemId);
        writer.writeAdditionalData(this.additionalData);
    };
}
