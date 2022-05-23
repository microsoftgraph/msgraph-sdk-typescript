import {Thumbnail} from './thumbnail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ThumbnailImpl implements AdditionalDataHolder, Parsable, Thumbnail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The content stream for the thumbnail. */
    public content?: string | undefined;
    /** The height of the thumbnail, in pixels. */
    public height?: number | undefined;
    /** The unique identifier of the item that provided the thumbnail. This is only available when a folder thumbnail is requested. */
    public sourceItemId?: string | undefined;
    /** The URL used to fetch the thumbnail content. */
    public url?: string | undefined;
    /** The width of the thumbnail, in pixels. */
    public width?: number | undefined;
    /**
     * Instantiates a new thumbnail and sets the default values.
     * @param thumbnailParameterValue 
     */
    public constructor(thumbnailParameterValue?: Thumbnail | undefined) {
        this.additionalData = thumbnailParameterValue?.additionalData ? thumbnailParameterValue?.additionalData! : {}
        this.content = thumbnailParameterValue?.content ;
        this.height = thumbnailParameterValue?.height ;
        this.sourceItemId = thumbnailParameterValue?.sourceItemId ;
        this.url = thumbnailParameterValue?.url ;
        this.width = thumbnailParameterValue?.width ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "content": n => { this.content = n.getStringValue(); },
            "height": n => { this.height = n.getNumberValue(); },
            "sourceItemId": n => { this.sourceItemId = n.getStringValue(); },
            "url": n => { this.url = n.getStringValue(); },
            "width": n => { this.width = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.content){
        writer.writeStringValue("content", this.content);
        }
        if(this.height){
        writer.writeNumberValue("height", this.height);
        }
        if(this.sourceItemId){
        writer.writeStringValue("sourceItemId", this.sourceItemId);
        }
        if(this.url){
        writer.writeStringValue("url", this.url);
        }
        if(this.width){
        writer.writeNumberValue("width", this.width);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
