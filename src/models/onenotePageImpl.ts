import {createNotebookFromDiscriminatorValue} from './createNotebookFromDiscriminatorValue';
import {createOnenoteSectionFromDiscriminatorValue} from './createOnenoteSectionFromDiscriminatorValue';
import {createPageLinksFromDiscriminatorValue} from './createPageLinksFromDiscriminatorValue';
import {NotebookImpl, OnenoteEntitySchemaObjectModelImpl, OnenoteSectionImpl, PageLinksImpl} from './index';
import {Notebook} from './notebook';
import {OnenotePage} from './onenotePage';
import {OnenoteSection} from './onenoteSection';
import {PageLinks} from './pageLinks';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class OnenotePageImpl extends OnenoteEntitySchemaObjectModelImpl implements OnenotePage {
    /** The page's HTML content. */
    private _content?: string | undefined;
    /** The URL for the page's HTML content.  Read-only. */
    private _contentUrl?: string | undefined;
    /** The unique identifier of the application that created the page. Read-only. */
    private _createdByAppId?: string | undefined;
    /** The date and time when the page was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    private _lastModifiedDateTime?: Date | undefined;
    /** The indentation level of the page. Read-only. */
    private _level?: number | undefined;
    /** Links for opening the page. The oneNoteClientURL link opens the page in the OneNote native client if it 's installed. The oneNoteWebUrl link opens the page in OneNote on the web. Read-only. */
    private _links?: PageLinks | undefined;
    /** The order of the page within its parent section. Read-only. */
    private _order?: number | undefined;
    /** The notebook that contains the page.  Read-only. */
    private _parentNotebook?: Notebook | undefined;
    /** The section that contains the page. Read-only. */
    private _parentSection?: OnenoteSection | undefined;
    /** The title of the page. */
    private _title?: string | undefined;
    /** The userTags property */
    private _userTags?: string[] | undefined;
    /**
     * Instantiates a new onenotePage and sets the default values.
     * @param onenotePageParameterValue 
     */
    public constructor(onenotePageParameterValue?: OnenotePage | undefined) {
        super(onenotePageParameterValue);
        this._content = onenotePageParameterValue?.content;
        this._contentUrl = onenotePageParameterValue?.contentUrl;
        this._createdByAppId = onenotePageParameterValue?.createdByAppId;
        this._lastModifiedDateTime = onenotePageParameterValue?.lastModifiedDateTime;
        this._level = onenotePageParameterValue?.level;
        this._links = onenotePageParameterValue?.links;
        this._order = onenotePageParameterValue?.order;
        this._parentNotebook = onenotePageParameterValue?.parentNotebook;
        this._parentSection = onenotePageParameterValue?.parentSection;
        this._title = onenotePageParameterValue?.title;
        this._userTags = onenotePageParameterValue?.userTags;
    };
    /**
     * Gets the content property value. The page's HTML content.
     * @returns a binary
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. The page's HTML content.
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        if(value) {
            this._content = value;
        }
    };
    /**
     * Gets the contentUrl property value. The URL for the page's HTML content.  Read-only.
     * @returns a string
     */
    public get contentUrl() {
        return this._contentUrl;
    };
    /**
     * Sets the contentUrl property value. The URL for the page's HTML content.  Read-only.
     * @param value Value to set for the contentUrl property.
     */
    public set contentUrl(value: string | undefined) {
        if(value) {
            this._contentUrl = value;
        }
    };
    /**
     * Gets the createdByAppId property value. The unique identifier of the application that created the page. Read-only.
     * @returns a string
     */
    public get createdByAppId() {
        return this._createdByAppId;
    };
    /**
     * Sets the createdByAppId property value. The unique identifier of the application that created the page. Read-only.
     * @param value Value to set for the createdByAppId property.
     */
    public set createdByAppId(value: string | undefined) {
        if(value) {
            this._createdByAppId = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "content": n => { this.content = n.getStringValue(); },
            "contentUrl": n => { this.contentUrl = n.getStringValue(); },
            "createdByAppId": n => { this.createdByAppId = n.getStringValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "level": n => { this.level = n.getNumberValue(); },
            "links": n => { this.links = n.getObjectValue<PageLinksImpl>(createPageLinksFromDiscriminatorValue); },
            "order": n => { this.order = n.getNumberValue(); },
            "parentNotebook": n => { this.parentNotebook = n.getObjectValue<NotebookImpl>(createNotebookFromDiscriminatorValue); },
            "parentSection": n => { this.parentSection = n.getObjectValue<OnenoteSectionImpl>(createOnenoteSectionFromDiscriminatorValue); },
            "title": n => { this.title = n.getStringValue(); },
            "userTags": n => { this.userTags = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the lastModifiedDateTime property value. The date and time when the page was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The date and time when the page was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Gets the level property value. The indentation level of the page. Read-only.
     * @returns a integer
     */
    public get level() {
        return this._level;
    };
    /**
     * Sets the level property value. The indentation level of the page. Read-only.
     * @param value Value to set for the level property.
     */
    public set level(value: number | undefined) {
        if(value) {
            this._level = value;
        }
    };
    /**
     * Gets the links property value. Links for opening the page. The oneNoteClientURL link opens the page in the OneNote native client if it 's installed. The oneNoteWebUrl link opens the page in OneNote on the web. Read-only.
     * @returns a PageLinksInterface
     */
    public get links() {
        return this._links;
    };
    /**
     * Sets the links property value. Links for opening the page. The oneNoteClientURL link opens the page in the OneNote native client if it 's installed. The oneNoteWebUrl link opens the page in OneNote on the web. Read-only.
     * @param value Value to set for the links property.
     */
    public set links(value: PageLinks | undefined) {
        if(value) {
            this._links = value instanceof PageLinksImpl? value : new PageLinksImpl(value);
        }
    };
    /**
     * Gets the order property value. The order of the page within its parent section. Read-only.
     * @returns a integer
     */
    public get order() {
        return this._order;
    };
    /**
     * Sets the order property value. The order of the page within its parent section. Read-only.
     * @param value Value to set for the order property.
     */
    public set order(value: number | undefined) {
        if(value) {
            this._order = value;
        }
    };
    /**
     * Gets the parentNotebook property value. The notebook that contains the page.  Read-only.
     * @returns a NotebookInterface
     */
    public get parentNotebook() {
        return this._parentNotebook;
    };
    /**
     * Sets the parentNotebook property value. The notebook that contains the page.  Read-only.
     * @param value Value to set for the parentNotebook property.
     */
    public set parentNotebook(value: Notebook | undefined) {
        if(value) {
            this._parentNotebook = value instanceof NotebookImpl? value : new NotebookImpl(value);
        }
    };
    /**
     * Gets the parentSection property value. The section that contains the page. Read-only.
     * @returns a OnenoteSectionInterface
     */
    public get parentSection() {
        return this._parentSection;
    };
    /**
     * Sets the parentSection property value. The section that contains the page. Read-only.
     * @param value Value to set for the parentSection property.
     */
    public set parentSection(value: OnenoteSection | undefined) {
        if(value) {
            this._parentSection = value instanceof OnenoteSectionImpl? value : new OnenoteSectionImpl(value);
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
        if(this.contentUrl){
            writer.writeStringValue("contentUrl", this.contentUrl);
        }
        if(this.createdByAppId){
            writer.writeStringValue("createdByAppId", this.createdByAppId);
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.level){
            writer.writeNumberValue("level", this.level);
        }
        if(this.links){
            writer.writeObjectValue<PageLinksImpl>("links", (!this.links || this.links instanceof PageLinksImpl? this.links : new PageLinksImpl(this.links)));
        }
        if(this.order){
            writer.writeNumberValue("order", this.order);
        }
        if(this.parentNotebook){
            writer.writeObjectValue<NotebookImpl>("parentNotebook", (!this.parentNotebook || this.parentNotebook instanceof NotebookImpl? this.parentNotebook : new NotebookImpl(this.parentNotebook)));
        }
        if(this.parentSection){
            writer.writeObjectValue<OnenoteSectionImpl>("parentSection", (!this.parentSection || this.parentSection instanceof OnenoteSectionImpl? this.parentSection : new OnenoteSectionImpl(this.parentSection)));
        }
        if(this.title){
            writer.writeStringValue("title", this.title);
        }
        if(this.userTags){
            writer.writeCollectionOfPrimitiveValues<string>("userTags", this.userTags);
        }
    };
    /**
     * Gets the title property value. The title of the page.
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. The title of the page.
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        if(value) {
            this._title = value;
        }
    };
    /**
     * Gets the userTags property value. The userTags property
     * @returns a string
     */
    public get userTags() {
        return this._userTags;
    };
    /**
     * Sets the userTags property value. The userTags property
     * @param value Value to set for the userTags property.
     */
    public set userTags(value: string[] | undefined) {
        if(value) {
            this._userTags = value;
        }
    };
}
