import {Image} from './image';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ImageImpl implements AdditionalDataHolder, Image, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Optional. Height of the image, in pixels. Read-only. */
    public height?: number | undefined;
    /** Optional. Width of the image, in pixels. Read-only. */
    public width?: number | undefined;
    /**
     * Instantiates a new image and sets the default values.
     * @param imageParameterValue 
     */
    public constructor(imageParameterValue?: Image | undefined) {
        this.additionalData = imageParameterValue?.additionalData ? imageParameterValue?.additionalData! : {}
        this.height = imageParameterValue?.height ;
        this.width = imageParameterValue?.width ;
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
}
