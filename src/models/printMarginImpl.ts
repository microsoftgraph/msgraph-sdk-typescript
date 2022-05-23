import {PrintMargin} from './printMargin';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintMarginImpl implements AdditionalDataHolder, Parsable, PrintMargin {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The margin in microns from the bottom edge. */
    public bottom?: number | undefined;
    /** The margin in microns from the left edge. */
    public left?: number | undefined;
    /** The margin in microns from the right edge. */
    public right?: number | undefined;
    /** The margin in microns from the top edge. */
    public top?: number | undefined;
    /**
     * Instantiates a new printMargin and sets the default values.
     * @param printMarginParameterValue 
     */
    public constructor(printMarginParameterValue?: PrintMargin | undefined) {
        this.additionalData = printMarginParameterValue?.additionalData ? printMarginParameterValue?.additionalData! : {}
        this.bottom = printMarginParameterValue?.bottom ;
        this.left = printMarginParameterValue?.left ;
        this.right = printMarginParameterValue?.right ;
        this.top = printMarginParameterValue?.top ;
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
}
