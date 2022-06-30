import {PrintMargin} from './printMargin';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintMarginImpl implements PrintMargin {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The margin in microns from the bottom edge. */
    private _bottom?: number | undefined;
    /** The margin in microns from the left edge. */
    private _left?: number | undefined;
    /** The margin in microns from the right edge. */
    private _right?: number | undefined;
    /** The margin in microns from the top edge. */
    private _top?: number | undefined;
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
     * Gets the bottom property value. The margin in microns from the bottom edge.
     * @returns a integer
     */
    public get bottom() {
        return this._bottom;
    };
    /**
     * Sets the bottom property value. The margin in microns from the bottom edge.
     * @param value Value to set for the bottom property.
     */
    public set bottom(value: number | undefined) {
        if(value) {
            this._bottom = value;
        }
    };
    /**
     * Instantiates a new printMargin and sets the default values.
     * @param printMarginParameterValue 
     */
    public constructor(printMarginParameterValue?: PrintMargin | undefined) {
        this._additionalData = printMarginParameterValue?.additionalData ? printMarginParameterValue?.additionalData! : {};
        this._bottom = printMarginParameterValue?.bottom;
        this._left = printMarginParameterValue?.left;
        this._right = printMarginParameterValue?.right;
        this._top = printMarginParameterValue?.top;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "bottom": n => { this.bottom = n.getNumberValue(); },
            "left": n => { this.left = n.getNumberValue(); },
            "right": n => { this.right = n.getNumberValue(); },
            "top": n => { this.top = n.getNumberValue(); },
        };
    };
    /**
     * Gets the left property value. The margin in microns from the left edge.
     * @returns a integer
     */
    public get left() {
        return this._left;
    };
    /**
     * Sets the left property value. The margin in microns from the left edge.
     * @param value Value to set for the left property.
     */
    public set left(value: number | undefined) {
        if(value) {
            this._left = value;
        }
    };
    /**
     * Gets the right property value. The margin in microns from the right edge.
     * @returns a integer
     */
    public get right() {
        return this._right;
    };
    /**
     * Sets the right property value. The margin in microns from the right edge.
     * @param value Value to set for the right property.
     */
    public set right(value: number | undefined) {
        if(value) {
            this._right = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.bottom){
            writer.writeNumberValue("bottom", this.bottom);
        }
        if(this.left){
            writer.writeNumberValue("left", this.left);
        }
        if(this.right){
            writer.writeNumberValue("right", this.right);
        }
        if(this.top){
            writer.writeNumberValue("top", this.top);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the top property value. The margin in microns from the top edge.
     * @returns a integer
     */
    public get top() {
        return this._top;
    };
    /**
     * Sets the top property value. The margin in microns from the top edge.
     * @param value Value to set for the top property.
     */
    public set top(value: number | undefined) {
        if(value) {
            this._top = value;
        }
    };
}
