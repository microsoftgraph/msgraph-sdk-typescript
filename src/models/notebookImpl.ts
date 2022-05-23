import {createNotebookLinksFromDiscriminatorValue} from './createNotebookLinksFromDiscriminatorValue';
import {createOnenoteSectionFromDiscriminatorValue} from './createOnenoteSectionFromDiscriminatorValue';
import {createSectionGroupFromDiscriminatorValue} from './createSectionGroupFromDiscriminatorValue';
import {NotebookLinksImpl, OnenoteEntityHierarchyModelImpl, OnenoteSectionImpl, SectionGroupImpl} from './index';
import {Notebook} from './notebook';
import {NotebookLinks} from './notebookLinks';
import {OnenoteSection} from './onenoteSection';
import {OnenoteUserRole} from './onenoteUserRole';
import {SectionGroup} from './sectionGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class NotebookImpl extends OnenoteEntityHierarchyModelImpl implements Notebook, Parsable {
    /** Indicates whether this is the user's default notebook. Read-only. */
    public isDefault?: boolean | undefined;
    /** Indicates whether the notebook is shared. If true, the contents of the notebook can be seen by people other than the owner. Read-only. */
    public isShared?: boolean | undefined;
    /** Links for opening the notebook. The oneNoteClientURL link opens the notebook in the OneNote native client if it's installed. The oneNoteWebURL link opens the notebook in OneNote on the web. */
    public links?: NotebookLinks | undefined;
    /** The section groups in the notebook. Read-only. Nullable. */
    public sectionGroups?: SectionGroup[] | undefined;
    /** The URL for the sectionGroups navigation property, which returns all the section groups in the notebook. Read-only. */
    public sectionGroupsUrl?: string | undefined;
    /** The sections in the notebook. Read-only. Nullable. */
    public sections?: OnenoteSection[] | undefined;
    /** The URL for the sections navigation property, which returns all the sections in the notebook. Read-only. */
    public sectionsUrl?: string | undefined;
    /** Possible values are: Owner, Contributor, Reader, None. Owner represents owner-level access to the notebook. Contributor represents read/write access to the notebook. Reader represents read-only access to the notebook. Read-only. */
    public userRole?: OnenoteUserRole | undefined;
    /**
     * Instantiates a new notebook and sets the default values.
     * @param notebookParameterValue 
     */
    public constructor(notebookParameterValue?: Notebook | undefined) {
        super();
        this.isDefault = notebookParameterValue?.isDefault ;
        this.isShared = notebookParameterValue?.isShared ;
        this.links = notebookParameterValue?.links ;
        this.sectionGroups = notebookParameterValue?.sectionGroups ;
        this.sectionGroupsUrl = notebookParameterValue?.sectionGroupsUrl ;
        this.sections = notebookParameterValue?.sections ;
        this.sectionsUrl = notebookParameterValue?.sectionsUrl ;
        this.userRole = notebookParameterValue?.userRole ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "isDefault": n => { this.isDefault = n.getBooleanValue(); },
            "isShared": n => { this.isShared = n.getBooleanValue(); },
            "links": n => { this.links = n.getObjectValue<NotebookLinksImpl>(createNotebookLinksFromDiscriminatorValue); },
            "sectionGroups": n => { this.sectionGroups = n.getCollectionOfObjectValues<SectionGroupImpl>(createSectionGroupFromDiscriminatorValue); },
            "sectionGroupsUrl": n => { this.sectionGroupsUrl = n.getStringValue(); },
            "sections": n => { this.sections = n.getCollectionOfObjectValues<OnenoteSectionImpl>(createOnenoteSectionFromDiscriminatorValue); },
            "sectionsUrl": n => { this.sectionsUrl = n.getStringValue(); },
            "userRole": n => { this.userRole = n.getEnumValue<OnenoteUserRole>(OnenoteUserRole); },
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
        if(this.isShared){
        writer.writeBooleanValue("isShared", this.isShared);
        }
        if(this.links){
        writer.writeObjectValue<NotebookLinksImpl>("links", new NotebookLinksImpl(this.links));
        }
        if(this.sectionGroups && this.sectionGroups.length != 0){        const sectionGroupsArrValue: SectionGroupImpl[] = []; this.sectionGroups?.forEach(element => {sectionGroupsArrValue.push(new SectionGroupImpl(element));});
        writer.writeCollectionOfObjectValues<SectionGroupImpl>("sectionGroups", sectionGroupsArrValue);
        }
        if(this.sectionGroupsUrl){
        writer.writeStringValue("sectionGroupsUrl", this.sectionGroupsUrl);
        }
        if(this.sections && this.sections.length != 0){        const sectionsArrValue: OnenoteSectionImpl[] = []; this.sections?.forEach(element => {sectionsArrValue.push(new OnenoteSectionImpl(element));});
        writer.writeCollectionOfObjectValues<OnenoteSectionImpl>("sections", sectionsArrValue);
        }
        if(this.sectionsUrl){
        writer.writeStringValue("sectionsUrl", this.sectionsUrl);
        }
        if(this.userRole){
        writer.writeEnumValue<OnenoteUserRole>("userRole", this.userRole);
        }
    };
}
