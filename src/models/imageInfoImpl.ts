import {ImageInfo} from './imageInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ImageInfoImpl implements AdditionalDataHolder, ImageInfo, Parsable {
    /** Optional; parameter used to indicate the server is able to render image dynamically in response to parameterization. For example – a high contrast image */
    public addImageQuery?: boolean | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Optional; alt-text accessible content for the image */
    public alternateText?: string | undefined;
    /** The alternativeText property */
    public alternativeText?: string | undefined;
    /** Optional; URI that points to an icon which represents the application used to generate the activity */
    public iconUrl?: string | undefined;
    /**
     * Instantiates a new imageInfo and sets the default values.
     * @param imageInfoParameterValue 
     */
    public constructor(imageInfoParameterValue?: ImageInfo | undefined) {
        this.addImageQuery = imageInfoParameterValue?.addImageQuery ;
        this.additionalData = imageInfoParameterValue?.additionalData ? imageInfoParameterValue?.additionalData! : {}
        this.alternateText = imageInfoParameterValue?.alternateText ;
        this.alternativeText = imageInfoParameterValue?.alternativeText ;
        this.iconUrl = imageInfoParameterValue?.iconUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "addImageQuery": n => { this.addImageQuery = n.getBooleanValue(); },
            "alternateText": n => { this.alternateText = n.getStringValue(); },
            "alternativeText": n => { this.alternativeText = n.getStringValue(); },
            "iconUrl": n => { this.iconUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.addImageQuery){
        writer.writeBooleanValue("addImageQuery", this.addImageQuery);
        }
        if(this.alternateText){
        writer.writeStringValue("alternateText", this.alternateText);
        }
        if(this.alternativeText){
        writer.writeStringValue("alternativeText", this.alternativeText);
        }
        if(this.iconUrl){
        writer.writeStringValue("iconUrl", this.iconUrl);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
