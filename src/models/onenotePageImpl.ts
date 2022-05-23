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
export class OnenotePageImpl extends OnenoteEntitySchemaObjectModelImpl implements OnenotePage, Parsable {
    /** The page's HTML content. */
    public content?: string | undefined;
    /** The URL for the page's HTML content.  Read-only. */
    public contentUrl?: string | undefined;
    /** The unique identifier of the application that created the page. Read-only. */
    public createdByAppId?: string | undefined;
    /** The date and time when the page was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    public lastModifiedDateTime?: Date | undefined;
    /** The indentation level of the page. Read-only. */
    public level?: number | undefined;
    /** Links for opening the page. The oneNoteClientURL link opens the page in the OneNote native client if it 's installed. The oneNoteWebUrl link opens the page in OneNote on the web. Read-only. */
    public links?: PageLinks | undefined;
    /** The order of the page within its parent section. Read-only. */
    public order?: number | undefined;
    /** The notebook that contains the page.  Read-only. */
    public parentNotebook?: Notebook | undefined;
    /** The section that contains the page. Read-only. */
    public parentSection?: OnenoteSection | undefined;
    /** The title of the page. */
    public title?: string | undefined;
    /** The userTags property */
    public userTags?: string[] | undefined;
    /**
     * Instantiates a new onenotePage and sets the default values.
     * @param onenotePageParameterValue 
     */
    public constructor(onenotePageParameterValue?: OnenotePage | undefined) {
        super();
        this.content = onenotePageParameterValue?.content ;
        this.contentUrl = onenotePageParameterValue?.contentUrl ;
        this.createdByAppId = onenotePageParameterValue?.createdByAppId ;
        this.lastModifiedDateTime = onenotePageParameterValue?.lastModifiedDateTime ;
        this.level = onenotePageParameterValue?.level ;
        this.links = onenotePageParameterValue?.links ;
        this.order = onenotePageParameterValue?.order ;
        this.parentNotebook = onenotePageParameterValue?.parentNotebook ;
        this.parentSection = onenotePageParameterValue?.parentSection ;
        this.title = onenotePageParameterValue?.title ;
        this.userTags = onenotePageParameterValue?.userTags ;
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
        writer.writeObjectValue<PageLinksImpl>("links", new PageLinksImpl(this.links));
        }
        if(this.order){
        writer.writeNumberValue("order", this.order);
        }
        if(this.parentNotebook){
        writer.writeObjectValue<NotebookImpl>("parentNotebook", new NotebookImpl(this.parentNotebook));
        }
        if(this.parentSection){
        writer.writeObjectValue<OnenoteSectionImpl>("parentSection", new OnenoteSectionImpl(this.parentSection));
        }
        if(this.title){
        writer.writeStringValue("title", this.title);
        }
        if(this.userTags){
        writer.writeCollectionOfPrimitiveValues<string>("userTags", this.userTags);
        }
    };
}
