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
export class OnenoteSectionImpl extends OnenoteEntityHierarchyModelImpl implements OnenoteSection, Parsable {
    /** Indicates whether this is the user's default section. Read-only. */
    public isDefault?: boolean | undefined;
    /** Links for opening the section. The oneNoteClientURL link opens the section in the OneNote native client if it's installed. The oneNoteWebURL link opens the section in OneNote on the web. */
    public links?: SectionLinks | undefined;
    /** The collection of pages in the section.  Read-only. Nullable. */
    public pages?: OnenotePage[] | undefined;
    /** The pages endpoint where you can get details for all the pages in the section. Read-only. */
    public pagesUrl?: string | undefined;
    /** The notebook that contains the section.  Read-only. */
    public parentNotebook?: Notebook | undefined;
    /** The section group that contains the section.  Read-only. */
    public parentSectionGroup?: SectionGroup | undefined;
    /**
     * Instantiates a new onenoteSection and sets the default values.
     * @param onenoteSectionParameterValue 
     */
    public constructor(onenoteSectionParameterValue?: OnenoteSection | undefined) {
        super();
        this.isDefault = onenoteSectionParameterValue?.isDefault ;
        this.links = onenoteSectionParameterValue?.links ;
        this.pages = onenoteSectionParameterValue?.pages ;
        this.pagesUrl = onenoteSectionParameterValue?.pagesUrl ;
        this.parentNotebook = onenoteSectionParameterValue?.parentNotebook ;
        this.parentSectionGroup = onenoteSectionParameterValue?.parentSectionGroup ;
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
        writer.writeObjectValue<SectionLinksImpl>("links", new SectionLinksImpl(this.links));
        }
        if(this.pages && this.pages.length != 0){        const pagesArrValue: OnenotePageImpl[] = []; this.pages?.forEach(element => {pagesArrValue.push(new OnenotePageImpl(element));});
        writer.writeCollectionOfObjectValues<OnenotePageImpl>("pages", pagesArrValue);
        }
        if(this.pagesUrl){
        writer.writeStringValue("pagesUrl", this.pagesUrl);
        }
        if(this.parentNotebook){
        writer.writeObjectValue<NotebookImpl>("parentNotebook", new NotebookImpl(this.parentNotebook));
        }
        if(this.parentSectionGroup){
        writer.writeObjectValue<SectionGroupImpl>("parentSectionGroup", new SectionGroupImpl(this.parentSectionGroup));
        }
    };
}
