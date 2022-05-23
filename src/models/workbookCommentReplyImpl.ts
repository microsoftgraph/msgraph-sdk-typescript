import {EntityImpl} from './index';
import {WorkbookCommentReply} from './workbookCommentReply';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class WorkbookCommentReplyImpl extends EntityImpl implements Parsable, WorkbookCommentReply {
    /** The content of replied comment. */
    public content?: string | undefined;
    /** Indicates the type for the replied comment. */
    public contentType?: string | undefined;
    /**
     * Instantiates a new workbookCommentReply and sets the default values.
     * @param workbookCommentReplyParameterValue 
     */
    public constructor(workbookCommentReplyParameterValue?: WorkbookCommentReply | undefined) {
        super();
        this.content = workbookCommentReplyParameterValue?.content ;
        this.contentType = workbookCommentReplyParameterValue?.contentType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "content": n => { this.content = n.getStringValue(); },
            "contentType": n => { this.contentType = n.getStringValue(); },
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
    };
}
