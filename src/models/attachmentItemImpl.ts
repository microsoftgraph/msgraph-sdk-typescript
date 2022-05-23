import {AttachmentItem} from './attachmentItem';
import {AttachmentType} from './attachmentType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AttachmentItemImpl implements AdditionalDataHolder, AttachmentItem, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The type of attachment. Possible values are: file, item, reference. Required. */
    public attachmentType?: AttachmentType | undefined;
    /** The CID or Content-Id of the attachment for referencing in case of in-line attachments using <img src='cid:contentId'> tag in HTML messages. Optional. */
    public contentId?: string | undefined;
    /** The nature of the data in the attachment. Optional. */
    public contentType?: string | undefined;
    /** true if the attachment is an inline attachment; otherwise, false. Optional. */
    public isInline?: boolean | undefined;
    /** The display name of the attachment. This can be a descriptive string and does not have to be the actual file name. Required. */
    public name?: string | undefined;
    /** The length of the attachment in bytes. Required. */
    public size?: number | undefined;
    /**
     * Instantiates a new attachmentItem and sets the default values.
     * @param attachmentItemParameterValue 
     */
    public constructor(attachmentItemParameterValue?: AttachmentItem | undefined) {
        this.additionalData = attachmentItemParameterValue?.additionalData ? attachmentItemParameterValue?.additionalData! : {}
        this.attachmentType = attachmentItemParameterValue?.attachmentType ;
        this.contentId = attachmentItemParameterValue?.contentId ;
        this.contentType = attachmentItemParameterValue?.contentType ;
        this.isInline = attachmentItemParameterValue?.isInline ;
        this.name = attachmentItemParameterValue?.name ;
        this.size = attachmentItemParameterValue?.size ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "attachmentType": n => { this.attachmentType = n.getEnumValue<AttachmentType>(AttachmentType); },
            "contentId": n => { this.contentId = n.getStringValue(); },
            "contentType": n => { this.contentType = n.getStringValue(); },
            "isInline": n => { this.isInline = n.getBooleanValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "size": n => { this.size = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.attachmentType){
        writer.writeEnumValue<AttachmentType>("attachmentType", this.attachmentType);
        }
        if(this.contentId){
        writer.writeStringValue("contentId", this.contentId);
        }
        if(this.contentType){
        writer.writeStringValue("contentType", this.contentType);
        }
        if(this.isInline){
        writer.writeBooleanValue("isInline", this.isInline);
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.size){
        writer.writeNumberValue("size", this.size);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
