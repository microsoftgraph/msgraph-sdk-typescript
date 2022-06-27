import {FileAttachment} from './fileAttachment';
import {AttachmentImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FileAttachmentImpl extends AttachmentImpl implements FileAttachment {
    /** The base64-encoded contents of the file. */
    public contentBytes?: string | undefined;
    /** The ID of the attachment in the Exchange store. */
    public contentId?: string | undefined;
    /** Do not use this property as it is not supported. */
    public contentLocation?: string | undefined;
    /**
     * Instantiates a new FileAttachment and sets the default values.
     * @param fileAttachmentParameterValue 
     */
    public constructor(fileAttachmentParameterValue?: FileAttachment | undefined) {
        super(fileAttachmentParameterValue);
        this.contentBytes = fileAttachmentParameterValue?.contentBytes;
        this.contentId = fileAttachmentParameterValue?.contentId;
        this.contentLocation = fileAttachmentParameterValue?.contentLocation;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "contentBytes": n => { this.contentBytes = n.getStringValue(); },
            "contentId": n => { this.contentId = n.getStringValue(); },
            "contentLocation": n => { this.contentLocation = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.contentBytes){
            writer.writeStringValue("contentBytes", this.contentBytes);
        }
        if(this.contentId){
            writer.writeStringValue("contentId", this.contentId);
        }
        if(this.contentLocation){
            writer.writeStringValue("contentLocation", this.contentLocation);
        }
    };
}
