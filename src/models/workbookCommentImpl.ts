import {createWorkbookCommentReplyFromDiscriminatorValue} from './createWorkbookCommentReplyFromDiscriminatorValue';
import {EntityImpl, WorkbookCommentReplyImpl} from './index';
import {WorkbookComment} from './workbookComment';
import {WorkbookCommentReply} from './workbookCommentReply';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookCommentImpl extends EntityImpl implements WorkbookComment {
    /** The content of the comment. */
    private _content?: string | undefined;
    /** Indicates the type for the comment. */
    private _contentType?: string | undefined;
    /** The replies property */
    private _replies?: WorkbookCommentReply[] | undefined;
    /**
     * Instantiates a new workbookComment and sets the default values.
     * @param workbookCommentParameterValue 
     */
    public constructor(workbookCommentParameterValue?: WorkbookComment | undefined) {
        super(workbookCommentParameterValue);
        this._content = workbookCommentParameterValue?.content;
        this._contentType = workbookCommentParameterValue?.contentType;
        this._replies = workbookCommentParameterValue?.replies;
    };
    /**
     * Gets the content property value. The content of the comment.
     * @returns a string
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. The content of the comment.
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        if(value) {
            this._content = value;
        }
    };
    /**
     * Gets the contentType property value. Indicates the type for the comment.
     * @returns a string
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Sets the contentType property value. Indicates the type for the comment.
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: string | undefined) {
        if(value) {
            this._contentType = value;
        }
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
     * Gets the replies property value. The replies property
     * @returns a WorkbookCommentReplyInterface
     */
    public get replies() {
        return this._replies;
    };
    /**
     * Sets the replies property value. The replies property
     * @param value Value to set for the replies property.
     */
    public set replies(value: WorkbookCommentReply[] | undefined) {
        if(value) {
            const repliesArrValue: WorkbookCommentReplyImpl[] = [];
            this.replies?.forEach(element => {
                repliesArrValue.push((element instanceof WorkbookCommentReplyImpl? element as WorkbookCommentReplyImpl:new WorkbookCommentReplyImpl(element)));
            });
            this._replies = repliesArrValue;
        }
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
        if(this.replies && this.replies.length != 0){        const repliesArrValue: WorkbookCommentReplyImpl[] = [];
        this.replies?.forEach(element => {
            repliesArrValue.push((element instanceof WorkbookCommentReplyImpl? element as WorkbookCommentReplyImpl:new WorkbookCommentReplyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WorkbookCommentReplyImpl>("replies", repliesArrValue);
        }
    };
}
