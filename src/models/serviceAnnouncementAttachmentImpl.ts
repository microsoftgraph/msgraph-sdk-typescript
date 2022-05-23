import {EntityImpl} from './index';
import {ServiceAnnouncementAttachment} from './serviceAnnouncementAttachment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class ServiceAnnouncementAttachmentImpl extends EntityImpl implements Parsable, ServiceAnnouncementAttachment {
    /** The attachment content. */
    public content?: string | undefined;
    /** The contentType property */
    public contentType?: string | undefined;
    /** The lastModifiedDateTime property */
    public lastModifiedDateTime?: Date | undefined;
    /** The name property */
    public name?: string | undefined;
    /** The size property */
    public size?: number | undefined;
    /**
     * Instantiates a new serviceAnnouncementAttachment and sets the default values.
     * @param serviceAnnouncementAttachmentParameterValue 
     */
    public constructor(serviceAnnouncementAttachmentParameterValue?: ServiceAnnouncementAttachment | undefined) {
        super();
        this.content = serviceAnnouncementAttachmentParameterValue?.content ;
        this.contentType = serviceAnnouncementAttachmentParameterValue?.contentType ;
        this.lastModifiedDateTime = serviceAnnouncementAttachmentParameterValue?.lastModifiedDateTime ;
        this.name = serviceAnnouncementAttachmentParameterValue?.name ;
        this.size = serviceAnnouncementAttachmentParameterValue?.size ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "content": n => { this.content = n.getStringValue(); },
            "contentType": n => { this.contentType = n.getStringValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
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
        super.serialize(writer);
        if(this.content){
        writer.writeStringValue("content", this.content);
        }
        if(this.contentType){
        writer.writeStringValue("contentType", this.contentType);
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.size){
        writer.writeNumberValue("size", this.size);
        }
    };
}
