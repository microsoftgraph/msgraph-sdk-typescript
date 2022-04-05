import {createNotebookFromDiscriminatorValue} from './createNotebookFromDiscriminatorValue';
import {createOnenoteSectionFromDiscriminatorValue} from './createOnenoteSectionFromDiscriminatorValue';
import {createSectionGroupFromDiscriminatorValue} from './createSectionGroupFromDiscriminatorValue';
import {Notebook, OnenoteEntityHierarchyModel, OnenoteSection} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SectionGroup extends OnenoteEntityHierarchyModel implements Parsable {
    /** The notebook that contains the section group. Read-only.  */
    private _parentNotebook?: Notebook | undefined;
    /** The section group that contains the section group. Read-only.  */
    private _parentSectionGroup?: SectionGroup | undefined;
    /** The section groups in the section. Read-only. Nullable.  */
    private _sectionGroups?: SectionGroup[] | undefined;
    /** The URL for the sectionGroups navigation property, which returns all the section groups in the section group. Read-only.  */
    private _sectionGroupsUrl?: string | undefined;
    /** The sections in the section group. Read-only. Nullable.  */
    private _sections?: OnenoteSection[] | undefined;
    /** The URL for the sections navigation property, which returns all the sections in the section group. Read-only.  */
    private _sectionsUrl?: string | undefined;
    /**
     * Instantiates a new sectionGroup and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "parentNotebook": (o, n) => { (o as unknown as SectionGroup).parentNotebook = n.getObjectValue<Notebook>(createNotebookFromDiscriminatorValue); },
            "parentSectionGroup": (o, n) => { (o as unknown as SectionGroup).parentSectionGroup = n.getObjectValue<SectionGroup>(createSectionGroupFromDiscriminatorValue); },
            "sectionGroups": (o, n) => { (o as unknown as SectionGroup).sectionGroups = n.getCollectionOfObjectValues<SectionGroup>(createSectionGroupFromDiscriminatorValue); },
            "sectionGroupsUrl": (o, n) => { (o as unknown as SectionGroup).sectionGroupsUrl = n.getStringValue(); },
            "sections": (o, n) => { (o as unknown as SectionGroup).sections = n.getCollectionOfObjectValues<OnenoteSection>(createOnenoteSectionFromDiscriminatorValue); },
            "sectionsUrl": (o, n) => { (o as unknown as SectionGroup).sectionsUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the parentNotebook property value. The notebook that contains the section group. Read-only.
     * @returns a notebook
     */
    public get parentNotebook() {
        return this._parentNotebook;
    };
    /**
     * Sets the parentNotebook property value. The notebook that contains the section group. Read-only.
     * @param value Value to set for the parentNotebook property.
     */
    public set parentNotebook(value: Notebook | undefined) {
        this._parentNotebook = value;
    };
    /**
     * Gets the parentSectionGroup property value. The section group that contains the section group. Read-only.
     * @returns a sectionGroup
     */
    public get parentSectionGroup() {
        return this._parentSectionGroup;
    };
    /**
     * Sets the parentSectionGroup property value. The section group that contains the section group. Read-only.
     * @param value Value to set for the parentSectionGroup property.
     */
    public set parentSectionGroup(value: SectionGroup | undefined) {
        this._parentSectionGroup = value;
    };
    /**
     * Gets the sectionGroups property value. The section groups in the section. Read-only. Nullable.
     * @returns a sectionGroup
     */
    public get sectionGroups() {
        return this._sectionGroups;
    };
    /**
     * Sets the sectionGroups property value. The section groups in the section. Read-only. Nullable.
     * @param value Value to set for the sectionGroups property.
     */
    public set sectionGroups(value: SectionGroup[] | undefined) {
        this._sectionGroups = value;
    };
    /**
     * Gets the sectionGroupsUrl property value. The URL for the sectionGroups navigation property, which returns all the section groups in the section group. Read-only.
     * @returns a string
     */
    public get sectionGroupsUrl() {
        return this._sectionGroupsUrl;
    };
    /**
     * Sets the sectionGroupsUrl property value. The URL for the sectionGroups navigation property, which returns all the section groups in the section group. Read-only.
     * @param value Value to set for the sectionGroupsUrl property.
     */
    public set sectionGroupsUrl(value: string | undefined) {
        this._sectionGroupsUrl = value;
    };
    /**
     * Gets the sections property value. The sections in the section group. Read-only. Nullable.
     * @returns a onenoteSection
     */
    public get sections() {
        return this._sections;
    };
    /**
     * Sets the sections property value. The sections in the section group. Read-only. Nullable.
     * @param value Value to set for the sections property.
     */
    public set sections(value: OnenoteSection[] | undefined) {
        this._sections = value;
    };
    /**
     * Gets the sectionsUrl property value. The URL for the sections navigation property, which returns all the sections in the section group. Read-only.
     * @returns a string
     */
    public get sectionsUrl() {
        return this._sectionsUrl;
    };
    /**
     * Sets the sectionsUrl property value. The URL for the sections navigation property, which returns all the sections in the section group. Read-only.
     * @param value Value to set for the sectionsUrl property.
     */
    public set sectionsUrl(value: string | undefined) {
        this._sectionsUrl = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Notebook>("parentNotebook", this.parentNotebook);
        writer.writeObjectValue<SectionGroup>("parentSectionGroup", this.parentSectionGroup);
        writer.writeCollectionOfObjectValues<SectionGroup>("sectionGroups", this.sectionGroups);
        writer.writeStringValue("sectionGroupsUrl", this.sectionGroupsUrl);
        writer.writeCollectionOfObjectValues<OnenoteSection>("sections", this.sections);
        writer.writeStringValue("sectionsUrl", this.sectionsUrl);
    };
}
