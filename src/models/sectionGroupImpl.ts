import {createNotebookFromDiscriminatorValue} from './createNotebookFromDiscriminatorValue';
import {createOnenoteSectionFromDiscriminatorValue} from './createOnenoteSectionFromDiscriminatorValue';
import {createSectionGroupFromDiscriminatorValue} from './createSectionGroupFromDiscriminatorValue';
import {NotebookImpl, OnenoteEntityHierarchyModelImpl, OnenoteSectionImpl} from './index';
import {Notebook} from './notebook';
import {OnenoteSection} from './onenoteSection';
import {SectionGroup} from './sectionGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class SectionGroupImpl extends OnenoteEntityHierarchyModelImpl implements Parsable, SectionGroup {
    /** The notebook that contains the section group. Read-only. */
    public parentNotebook?: Notebook | undefined;
    /** The section group that contains the section group. Read-only. */
    public parentSectionGroup?: SectionGroup | undefined;
    /** The section groups in the section. Read-only. Nullable. */
    public sectionGroups?: SectionGroup[] | undefined;
    /** The URL for the sectionGroups navigation property, which returns all the section groups in the section group. Read-only. */
    public sectionGroupsUrl?: string | undefined;
    /** The sections in the section group. Read-only. Nullable. */
    public sections?: OnenoteSection[] | undefined;
    /** The URL for the sections navigation property, which returns all the sections in the section group. Read-only. */
    public sectionsUrl?: string | undefined;
    /**
     * Instantiates a new sectionGroup and sets the default values.
     * @param sectionGroupParameterValue 
     */
    public constructor(sectionGroupParameterValue?: SectionGroup | undefined) {
        super();
        this.parentNotebook = sectionGroupParameterValue?.parentNotebook ;
        this.parentSectionGroup = sectionGroupParameterValue?.parentSectionGroup ;
        this.sectionGroups = sectionGroupParameterValue?.sectionGroups ;
        this.sectionGroupsUrl = sectionGroupParameterValue?.sectionGroupsUrl ;
        this.sections = sectionGroupParameterValue?.sections ;
        this.sectionsUrl = sectionGroupParameterValue?.sectionsUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "parentNotebook": n => { this.parentNotebook = n.getObjectValue<NotebookImpl>(createNotebookFromDiscriminatorValue); },
            "parentSectionGroup": n => { this.parentSectionGroup = n.getObjectValue<SectionGroupImpl>(createSectionGroupFromDiscriminatorValue); },
            "sectionGroups": n => { this.sectionGroups = n.getCollectionOfObjectValues<SectionGroupImpl>(createSectionGroupFromDiscriminatorValue); },
            "sectionGroupsUrl": n => { this.sectionGroupsUrl = n.getStringValue(); },
            "sections": n => { this.sections = n.getCollectionOfObjectValues<OnenoteSectionImpl>(createOnenoteSectionFromDiscriminatorValue); },
            "sectionsUrl": n => { this.sectionsUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.parentNotebook){
        writer.writeObjectValue<NotebookImpl>("parentNotebook", new NotebookImpl(this.parentNotebook));
        }
        if(this.parentSectionGroup){
        writer.writeObjectValue<SectionGroupImpl>("parentSectionGroup", new SectionGroupImpl(this.parentSectionGroup));
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
    };
}
