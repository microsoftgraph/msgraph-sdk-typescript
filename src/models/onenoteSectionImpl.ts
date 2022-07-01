import {createNotebookFromDiscriminatorValue} from './createNotebookFromDiscriminatorValue';
import {createOnenotePageFromDiscriminatorValue} from './createOnenotePageFromDiscriminatorValue';
import {createSectionGroupFromDiscriminatorValue} from './createSectionGroupFromDiscriminatorValue';
import {createSectionLinksFromDiscriminatorValue} from './createSectionLinksFromDiscriminatorValue';
import {NotebookImpl, OnenoteEntityHierarchyModelImpl, OnenotePageImpl, SectionGroupImpl, SectionLinksImpl} from './index';
import {Notebook} from './notebook';
import {OnenotePage} from './onenotePage';
import {OnenoteSection} from './onenoteSection';
import {SectionGroup} from './sectionGroup';
import {SectionLinks} from './sectionLinks';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class OnenoteSectionImpl extends OnenoteEntityHierarchyModelImpl implements OnenoteSection {
    /** Indicates whether this is the user's default section. Read-only. */
    private _isDefault?: boolean | undefined;
    /** Links for opening the section. The oneNoteClientURL link opens the section in the OneNote native client if it's installed. The oneNoteWebURL link opens the section in OneNote on the web. */
    private _links?: SectionLinks | undefined;
    /** The collection of pages in the section.  Read-only. Nullable. */
    private _pages?: OnenotePage[] | undefined;
    /** The pages endpoint where you can get details for all the pages in the section. Read-only. */
    private _pagesUrl?: string | undefined;
    /** The notebook that contains the section.  Read-only. */
    private _parentNotebook?: Notebook | undefined;
    /** The section group that contains the section.  Read-only. */
    private _parentSectionGroup?: SectionGroup | undefined;
    /**
     * Instantiates a new onenoteSection and sets the default values.
     * @param onenoteSectionParameterValue 
     */
    public constructor(onenoteSectionParameterValue?: OnenoteSection | undefined) {
        super(onenoteSectionParameterValue);
        this._isDefault = onenoteSectionParameterValue?.isDefault;
        this._links = onenoteSectionParameterValue?.links;
        this._pages = onenoteSectionParameterValue?.pages;
        this._pagesUrl = onenoteSectionParameterValue?.pagesUrl;
        this._parentNotebook = onenoteSectionParameterValue?.parentNotebook;
        this._parentSectionGroup = onenoteSectionParameterValue?.parentSectionGroup;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "isDefault": n => { this.isDefault = n.getBooleanValue(); },
            "links": n => { this.links = n.getObjectValue<SectionLinksImpl>(createSectionLinksFromDiscriminatorValue); },
            "pages": n => { this.pages = n.getCollectionOfObjectValues<OnenotePageImpl>(createOnenotePageFromDiscriminatorValue); },
            "pagesUrl": n => { this.pagesUrl = n.getStringValue(); },
            "parentNotebook": n => { this.parentNotebook = n.getObjectValue<NotebookImpl>(createNotebookFromDiscriminatorValue); },
            "parentSectionGroup": n => { this.parentSectionGroup = n.getObjectValue<SectionGroupImpl>(createSectionGroupFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isDefault property value. Indicates whether this is the user's default section. Read-only.
     * @returns a boolean
     */
    public get isDefault() {
        return this._isDefault;
    };
    /**
     * Sets the isDefault property value. Indicates whether this is the user's default section. Read-only.
     * @param value Value to set for the isDefault property.
     */
    public set isDefault(value: boolean | undefined) {
        if(value) {
            this._isDefault = value;
        }
    };
    /**
     * Gets the links property value. Links for opening the section. The oneNoteClientURL link opens the section in the OneNote native client if it's installed. The oneNoteWebURL link opens the section in OneNote on the web.
     * @returns a SectionLinksInterface
     */
    public get links() {
        return this._links;
    };
    /**
     * Sets the links property value. Links for opening the section. The oneNoteClientURL link opens the section in the OneNote native client if it's installed. The oneNoteWebURL link opens the section in OneNote on the web.
     * @param value Value to set for the links property.
     */
    public set links(value: SectionLinks | undefined) {
        if(value) {
            this._links = value instanceof SectionLinksImpl? value as SectionLinksImpl: new SectionLinksImpl(value);
        }
    };
    /**
     * Gets the pages property value. The collection of pages in the section.  Read-only. Nullable.
     * @returns a OnenotePageInterface
     */
    public get pages() {
        return this._pages;
    };
    /**
     * Sets the pages property value. The collection of pages in the section.  Read-only. Nullable.
     * @param value Value to set for the pages property.
     */
    public set pages(value: OnenotePage[] | undefined) {
        if(value) {
            const pagesArrValue: OnenotePageImpl[] = [];
            this.pages?.forEach(element => {
                pagesArrValue.push((element instanceof OnenotePageImpl? element as OnenotePageImpl:new OnenotePageImpl(element)));
            });
            this._pages = pagesArrValue;
        }
    };
    /**
     * Gets the pagesUrl property value. The pages endpoint where you can get details for all the pages in the section. Read-only.
     * @returns a string
     */
    public get pagesUrl() {
        return this._pagesUrl;
    };
    /**
     * Sets the pagesUrl property value. The pages endpoint where you can get details for all the pages in the section. Read-only.
     * @param value Value to set for the pagesUrl property.
     */
    public set pagesUrl(value: string | undefined) {
        if(value) {
            this._pagesUrl = value;
        }
    };
    /**
     * Gets the parentNotebook property value. The notebook that contains the section.  Read-only.
     * @returns a NotebookInterface
     */
    public get parentNotebook() {
        return this._parentNotebook;
    };
    /**
     * Sets the parentNotebook property value. The notebook that contains the section.  Read-only.
     * @param value Value to set for the parentNotebook property.
     */
    public set parentNotebook(value: Notebook | undefined) {
        if(value) {
            this._parentNotebook = value instanceof NotebookImpl? value as NotebookImpl: new NotebookImpl(value);
        }
    };
    /**
     * Gets the parentSectionGroup property value. The section group that contains the section.  Read-only.
     * @returns a SectionGroupInterface
     */
    public get parentSectionGroup() {
        return this._parentSectionGroup;
    };
    /**
     * Sets the parentSectionGroup property value. The section group that contains the section.  Read-only.
     * @param value Value to set for the parentSectionGroup property.
     */
    public set parentSectionGroup(value: SectionGroup | undefined) {
        if(value) {
            this._parentSectionGroup = value instanceof SectionGroupImpl? value as SectionGroupImpl: new SectionGroupImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.isDefault){
            writer.writeBooleanValue("isDefault", this.isDefault);
        }
        if(this.links){
            writer.writeObjectValue<SectionLinksImpl>("links", (this.links instanceof SectionLinksImpl? this.links as SectionLinksImpl: new SectionLinksImpl(this.links)));
        }
        if(this.pages && this.pages.length != 0){        const pagesArrValue: OnenotePageImpl[] = [];
        this.pages?.forEach(element => {
            pagesArrValue.push((element instanceof OnenotePageImpl? element as OnenotePageImpl:new OnenotePageImpl(element)));
        });
            writer.writeCollectionOfObjectValues<OnenotePageImpl>("pages", pagesArrValue);
        }
        if(this.pagesUrl){
            writer.writeStringValue("pagesUrl", this.pagesUrl);
        }
        if(this.parentNotebook){
            writer.writeObjectValue<NotebookImpl>("parentNotebook", (this.parentNotebook instanceof NotebookImpl? this.parentNotebook as NotebookImpl: new NotebookImpl(this.parentNotebook)));
        }
        if(this.parentSectionGroup){
            writer.writeObjectValue<SectionGroupImpl>("parentSectionGroup", (this.parentSectionGroup instanceof SectionGroupImpl? this.parentSectionGroup as SectionGroupImpl: new SectionGroupImpl(this.parentSectionGroup)));
        }
    };
}
