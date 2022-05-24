import {ChatMessageAttachment} from './chatMessageAttachment';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessageAttachmentImpl implements AdditionalDataHolder, ChatMessageAttachment, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The content of the attachment. If the attachment is a rich card, set the property to the rich card object. This property and contentUrl are mutually exclusive. */
    public content?: string | undefined;
    /** The media type of the content attachment. It can have the following values: reference: Attachment is a link to another file. Populate the contentURL with the link to the object.Any contentTypes supported by the Bot Framework's Attachment objectapplication/vnd.microsoft.card.codesnippet: A code snippet. application/vnd.microsoft.card.announcement: An announcement header. */
    public contentType?: string | undefined;
    /** URL for the content of the attachment. Supported protocols: http, https, file and data. */
    public contentUrl?: string | undefined;
    /** Read-only. Unique id of the attachment. */
    public id?: string | undefined;
    /** Name of the attachment. */
    public name?: string | undefined;
    /** URL to a thumbnail image that the channel can use if it supports using an alternative, smaller form of content or contentUrl. For example, if you set contentType to application/word and set contentUrl to the location of the Word document, you might include a thumbnail image that represents the document. The channel could display the thumbnail image instead of the document. When the user clicks the image, the channel would open the document. */
    public thumbnailUrl?: string | undefined;
    /**
     * Instantiates a new chatMessageAttachment and sets the default values.
     * @param chatMessageAttachmentParameterValue 
     */
    public constructor(chatMessageAttachmentParameterValue?: ChatMessageAttachment | undefined) {
        this.additionalData = chatMessageAttachmentParameterValue?.additionalData ? chatMessageAttachmentParameterValue?.additionalData! : {}
        this.content = chatMessageAttachmentParameterValue?.content ;
        this.contentType = chatMessageAttachmentParameterValue?.contentType ;
        this.contentUrl = chatMessageAttachmentParameterValue?.contentUrl ;
        this.id = chatMessageAttachmentParameterValue?.id ;
        this.name = chatMessageAttachmentParameterValue?.name ;
        this.thumbnailUrl = chatMessageAttachmentParameterValue?.thumbnailUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "content": n => { this.content = n.getStringValue(); },
            "contentType": n => { this.contentType = n.getStringValue(); },
            "contentUrl": n => { this.contentUrl = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "thumbnailUrl": n => { this.thumbnailUrl = n.getStringValue(); },
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
        if(this.contentType){
        writer.writeStringValue("contentType", this.contentType);
        }
        if(this.contentUrl){
        writer.writeStringValue("contentUrl", this.contentUrl);
        }
        if(this.id){
        writer.writeStringValue("id", this.id);
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.thumbnailUrl){
        writer.writeStringValue("thumbnailUrl", this.thumbnailUrl);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
