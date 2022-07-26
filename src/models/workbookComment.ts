import {createWorkbookCommentReplyFromDiscriminatorValue} from './createWorkbookCommentReplyFromDiscriminatorValue';
import {Entity, WorkbookCommentReply} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreement entities. */
export class WorkbookComment extends Entity implements Parsable {
    /** The content of the comment. */
    private _content?: string | undefined;
    /** Indicates the type for the comment. */
    private _contentType?: string | undefined;
    /** The replies property */
    private _replies?: WorkbookCommentReply[] | undefined;
    /**
     * Instantiates a new workbookComment and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.workbookComment";
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
        this._content = value;
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
        this._contentType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "content": n => { this.content = n.getStringValue(); },
            "contentType": n => { this.contentType = n.getStringValue(); },
            "replies": n => { this.replies = n.getCollectionOfObjectValues<WorkbookCommentReply>(createWorkbookCommentReplyFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the replies property value. The replies property
     * @returns a workbookCommentReply
     */
    public get replies() {
        return this._replies;
    };
    /**
     * Sets the replies property value. The replies property
     * @param value Value to set for the replies property.
     */
    public set replies(value: WorkbookCommentReply[] | undefined) {
        this._replies = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("content", this.content);
        writer.writeStringValue("contentType", this.contentType);
        writer.writeCollectionOfObjectValues<WorkbookCommentReply>("replies", this.replies);
    };
}
