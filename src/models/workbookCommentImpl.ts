import {createWorkbookCommentReplyFromDiscriminatorValue} from './createWorkbookCommentReplyFromDiscriminatorValue';
import {EntityImpl, WorkbookCommentReplyImpl} from './index';
import {WorkbookComment} from './workbookComment';
import {WorkbookCommentReply} from './workbookCommentReply';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class WorkbookCommentImpl extends EntityImpl implements Parsable, WorkbookComment {
    /** The content of the comment. */
    public content?: string | undefined;
    /** Indicates the type for the comment. */
    public contentType?: string | undefined;
    /** Read-only. Nullable. */
    public replies?: WorkbookCommentReply[] | undefined;
    /**
     * Instantiates a new workbookComment and sets the default values.
     * @param workbookCommentParameterValue 
     */
    public constructor(workbookCommentParameterValue?: WorkbookComment | undefined) {
        super();
        this.content = workbookCommentParameterValue?.content ;
        this.contentType = workbookCommentParameterValue?.contentType ;
        this.replies = workbookCommentParameterValue?.replies ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "content": n => { this.content = n.getStringValue(); },
            "contentType": n => { this.contentType = n.getStringValue(); },
            "replies": n => { this.replies = n.getCollectionOfObjectValues<WorkbookCommentReplyImpl>(createWorkbookCommentReplyFromDiscriminatorValue); },
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
        if(this.replies && this.replies.length != 0){        const repliesArrValue: WorkbookCommentReplyImpl[] = []; this.replies?.forEach(element => {repliesArrValue.push(new WorkbookCommentReplyImpl(element));});
        writer.writeCollectionOfObjectValues<WorkbookCommentReplyImpl>("replies", repliesArrValue);
        }
    };
}
