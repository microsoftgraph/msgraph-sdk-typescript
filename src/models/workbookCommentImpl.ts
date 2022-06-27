import {createWorkbookCommentReplyFromDiscriminatorValue} from './createWorkbookCommentReplyFromDiscriminatorValue';
import {EntityImpl, WorkbookCommentReplyImpl} from './index';
import {WorkbookComment} from './workbookComment';
import {WorkbookCommentReply} from './workbookCommentReply';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class WorkbookCommentImpl extends EntityImpl implements WorkbookComment {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The content of the comment. */
    public content?: string | undefined;
    /** Indicates the type for the comment. */
    public contentType?: string | undefined;
    /** The replies property */
    public replies?: WorkbookCommentReply[] | undefined;
    /**
     * Instantiates a new workbookComment and sets the default values.
     * @param workbookCommentParameterValue 
     */
    public constructor(workbookCommentParameterValue?: WorkbookComment | undefined) {
        super(workbookCommentParameterValue);
        this.additionalData = workbookCommentParameterValue?.additionalData ? workbookCommentParameterValue?.additionalData! : {};
        this.content = workbookCommentParameterValue?.content;
        this.contentType = workbookCommentParameterValue?.contentType;
        const repliesArrValue: WorkbookCommentReplyImpl[] = []; workbookCommentParameterValue.replies?.forEach(element => {repliesArrValue.push(element instanceof WorkbookCommentReplyImpl? element : new WorkbookCommentReplyImpl(element));});
        this.replies = repliesArrValue;
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
        if(this.replies && this.replies.length != 0){        const repliesArrValue: WorkbookCommentReplyImpl[] = []; this.replies?.forEach(element => {repliesArrValue.push(element instanceof WorkbookCommentReplyImpl? element : new WorkbookCommentReplyImpl(element));});
            writer.writeCollectionOfObjectValues<WorkbookCommentReplyImpl>("replies", repliesArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
