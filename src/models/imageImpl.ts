import {Image} from './image';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ImageImpl implements Image {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Optional. Height of the image, in pixels. Read-only. */
    private _height?: number | undefined;
    /** Optional. Width of the image, in pixels. Read-only. */
    private _width?: number | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new image and sets the default values.
     * @param imageParameterValue 
     */
    public constructor(imageParameterValue?: Image | undefined) {
        this._additionalData = imageParameterValue?.additionalData ? imageParameterValue?.additionalData! : {};
        this._height = imageParameterValue?.height;
        this._width = imageParameterValue?.width;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "height": n => { this.height = n.getNumberValue(); },
            "width": n => { this.width = n.getNumberValue(); },
        };
    };
    /**
     * Gets the height property value. Optional. Height of the image, in pixels. Read-only.
     * @returns a integer
     */
    public get height() {
        return this._height;
    };
    /**
     * Sets the height property value. Optional. Height of the image, in pixels. Read-only.
     * @param value Value to set for the height property.
     */
    public set height(value: number | undefined) {
        if(value) {
            this._height = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.height){
            writer.writeNumberValue("height", this.height);
        }
        if(this.width){
            writer.writeNumberValue("width", this.width);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the width property value. Optional. Width of the image, in pixels. Read-only.
     * @returns a integer
     */
    public get width() {
        return this._width;
    };
    /**
     * Sets the width property value. Optional. Width of the image, in pixels. Read-only.
     * @param value Value to set for the width property.
     */
    public set width(value: number | undefined) {
        if(value) {
            this._width = value;
        }
    };
}
