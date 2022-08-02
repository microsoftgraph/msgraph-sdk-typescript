import {createDocumentSetVersionItemFromDiscriminatorValue} from './createDocumentSetVersionItemFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {DocumentSetVersionItem, IdentitySet, ListItemVersion} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DocumentSetVersion extends ListItemVersion implements Parsable {
    /** Comment about the captured version. */
    private _comment?: string | undefined;
    /** User who captured the version. */
    private _createdBy?: IdentitySet | undefined;
    /** Date and time when this version was created. */
    private _createdDateTime?: Date | undefined;
    /** Items within the document set that are captured as part of this version. */
    private _items?: DocumentSetVersionItem[] | undefined;
    /** If true, minor versions of items are also captured; otherwise, only major versions will be captured. Default value is false. */
    private _shouldCaptureMinorVersion?: boolean | undefined;
    /**
     * Gets the comment property value. Comment about the captured version.
     * @returns a string
     */
    public get comment() {
        return this._comment;
    };
    /**
     * Sets the comment property value. Comment about the captured version.
     * @param value Value to set for the comment property.
     */
    public set comment(value: string | undefined) {
        this._comment = value;
    };
    /**
     * Instantiates a new DocumentSetVersion and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.documentSetVersion";
    };
    /**
     * Gets the createdBy property value. User who captured the version.
     * @returns a identitySet
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. User who captured the version.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        this._createdBy = value;
    };
    /**
     * Gets the createdDateTime property value. Date and time when this version was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Date and time when this version was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "comment": n => { this.comment = n.getStringValue(); },
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "items": n => { this.items = n.getCollectionOfObjectValues<DocumentSetVersionItem>(createDocumentSetVersionItemFromDiscriminatorValue); },
            "shouldCaptureMinorVersion": n => { this.shouldCaptureMinorVersion = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the items property value. Items within the document set that are captured as part of this version.
     * @returns a documentSetVersionItem
     */
    public get items() {
        return this._items;
    };
    /**
     * Sets the items property value. Items within the document set that are captured as part of this version.
     * @param value Value to set for the items property.
     */
    public set items(value: DocumentSetVersionItem[] | undefined) {
        this._items = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("comment", this.comment);
        writer.writeObjectValue<IdentitySet>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeCollectionOfObjectValues<DocumentSetVersionItem>("items", this.items);
        writer.writeBooleanValue("shouldCaptureMinorVersion", this.shouldCaptureMinorVersion);
    };
    /**
     * Gets the shouldCaptureMinorVersion property value. If true, minor versions of items are also captured; otherwise, only major versions will be captured. Default value is false.
     * @returns a boolean
     */
    public get shouldCaptureMinorVersion() {
        return this._shouldCaptureMinorVersion;
    };
    /**
     * Sets the shouldCaptureMinorVersion property value. If true, minor versions of items are also captured; otherwise, only major versions will be captured. Default value is false.
     * @param value Value to set for the shouldCaptureMinorVersion property.
     */
    public set shouldCaptureMinorVersion(value: boolean | undefined) {
        this._shouldCaptureMinorVersion = value;
    };
}
