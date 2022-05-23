import {HyperlinkOrPictureColumn} from './hyperlinkOrPictureColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class HyperlinkOrPictureColumnImpl implements AdditionalDataHolder, HyperlinkOrPictureColumn, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Specifies whether the display format used for URL columns is an image or a hyperlink. */
    public isPicture?: boolean | undefined;
    /**
     * Instantiates a new hyperlinkOrPictureColumn and sets the default values.
     * @param hyperlinkOrPictureColumnParameterValue 
     */
    public constructor(hyperlinkOrPictureColumnParameterValue?: HyperlinkOrPictureColumn | undefined) {
        this.additionalData = hyperlinkOrPictureColumnParameterValue?.additionalData ? hyperlinkOrPictureColumnParameterValue?.additionalData! : {}
        this.isPicture = hyperlinkOrPictureColumnParameterValue?.isPicture ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isPicture": n => { this.isPicture = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.isPicture){
        writer.writeBooleanValue("isPicture", this.isPicture);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
