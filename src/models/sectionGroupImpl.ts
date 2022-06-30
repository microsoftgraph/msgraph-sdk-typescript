import {createNotebookFromDiscriminatorValue} from './createNotebookFromDiscriminatorValue';
import {createOnenoteSectionFromDiscriminatorValue} from './createOnenoteSectionFromDiscriminatorValue';
import {createSectionGroupFromDiscriminatorValue} from './createSectionGroupFromDiscriminatorValue';
import {NotebookImpl, OnenoteEntityHierarchyModelImpl, OnenoteSectionImpl} from './index';
import {Notebook} from './notebook';
import {OnenoteSection} from './onenoteSection';
import {SectionGroup} from './sectionGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class SectionGroupImpl extends OnenoteEntityHierarchyModelImpl implements SectionGroup {
    /** The notebook that contains the section group. Read-only. */
    private _parentNotebook?: Notebook | undefined;
    /** The section group that contains the section group. Read-only. */
    private _parentSectionGroup?: SectionGroup | undefined;
    /** The section groups in the section. Read-only. Nullable. */
    private _sectionGroups?: SectionGroup[] | undefined;
    /** The URL for the sectionGroups navigation property, which returns all the section groups in the section group. Read-only. */
    private _sectionGroupsUrl?: string | undefined;
    /** The sections in the section group. Read-only. Nullable. */
    private _sections?: OnenoteSection[] | undefined;
    /** The URL for the sections navigation property, which returns all the sections in the section group. Read-only. */
    private _sectionsUrl?: string | undefined;
    /**
     * Instantiates a new sectionGroup and sets the default values.
     * @param sectionGroupParameterValue 
     */
    public constructor(sectionGroupParameterValue?: SectionGroup | undefined) {
        super(sectionGroupParameterValue);
        this._parentNotebook = sectionGroupParameterValue?.parentNotebook;
        this._parentSectionGroup = sectionGroupParameterValue?.parentSectionGroup;
        this._sectionGroups = sectionGroupParameterValue?.sectionGroups;
        this._sectionGroupsUrl = sectionGroupParameterValue?.sectionGroupsUrl;
        this._sections = sectionGroupParameterValue?.sections;
        this._sectionsUrl = sectionGroupParameterValue?.sectionsUrl;
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
     * Gets the parentNotebook property value. The notebook that contains the section group. Read-only.
     * @returns a NotebookInterface
     */
    public get parentNotebook() {
        return this._parentNotebook;
    };
    /**
     * Sets the parentNotebook property value. The notebook that contains the section group. Read-only.
     * @param value Value to set for the parentNotebook property.
     */
    public set parentNotebook(value: Notebook | undefined) {
        if(value) {
            this._parentNotebook = value instanceof NotebookImpl? value : new NotebookImpl(value);
        }
    };
    /**
     * Gets the parentSectionGroup property value. The section group that contains the section group. Read-only.
     * @returns a SectionGroupInterface
     */
    public get parentSectionGroup() {
        return this._parentSectionGroup;
    };
    /**
     * Sets the parentSectionGroup property value. The section group that contains the section group. Read-only.
     * @param value Value to set for the parentSectionGroup property.
     */
    public set parentSectionGroup(value: SectionGroup | undefined) {
        if(value) {
            this._parentSectionGroup = value instanceof SectionGroupImpl? value : new SectionGroupImpl(value);
        }
    };
    /**
     * Gets the sectionGroups property value. The section groups in the section. Read-only. Nullable.
     * @returns a SectionGroupInterface
     */
    public get sectionGroups() {
        return this._sectionGroups;
    };
    /**
     * Sets the sectionGroups property value. The section groups in the section. Read-only. Nullable.
     * @param value Value to set for the sectionGroups property.
     */
    public set sectionGroups(value: SectionGroup[] | undefined) {
        if(value) {
            const sectionGroupsArrValue: SectionGroupImpl[] = [];
            this.sectionGroups?.forEach(element => {
                sectionGroupsArrValue.push((element instanceof SectionGroupImpl? element:new SectionGroupImpl(element)));
            });
            this._sectionGroups = sectionGroupsArrValue;
        }
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
        if(value) {
            this._sectionGroupsUrl = value;
        }
    };
    /**
     * Gets the sections property value. The sections in the section group. Read-only. Nullable.
     * @returns a OnenoteSectionInterface
     */
    public get sections() {
        return this._sections;
    };
    /**
     * Sets the sections property value. The sections in the section group. Read-only. Nullable.
     * @param value Value to set for the sections property.
     */
    public set sections(value: OnenoteSection[] | undefined) {
        if(value) {
            const sectionsArrValue: OnenoteSectionImpl[] = [];
            this.sections?.forEach(element => {
                sectionsArrValue.push((element instanceof OnenoteSectionImpl? element:new OnenoteSectionImpl(element)));
            });
            this._sections = sectionsArrValue;
        }
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
        if(value) {
            this._sectionsUrl = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.parentNotebook){
            writer.writeObjectValue<NotebookImpl>("parentNotebook", (!this.parentNotebook || this.parentNotebook instanceof NotebookImpl? this.parentNotebook : new NotebookImpl(this.parentNotebook)));
        }
        if(this.parentSectionGroup){
            writer.writeObjectValue<SectionGroupImpl>("parentSectionGroup", (!this.parentSectionGroup || this.parentSectionGroup instanceof SectionGroupImpl? this.parentSectionGroup : new SectionGroupImpl(this.parentSectionGroup)));
        }
        if(this.sectionGroups && this.sectionGroups.length != 0){        const sectionGroupsArrValue: SectionGroupImpl[] = [];
        this.sectionGroups?.forEach(element => {
            sectionGroupsArrValue.push((element instanceof SectionGroupImpl? element:new SectionGroupImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SectionGroupImpl>("sectionGroups", sectionGroupsArrValue);
        }
        if(this.sectionGroupsUrl){
            writer.writeStringValue("sectionGroupsUrl", this.sectionGroupsUrl);
        }
        if(this.sections && this.sections.length != 0){        const sectionsArrValue: OnenoteSectionImpl[] = [];
        this.sections?.forEach(element => {
            sectionsArrValue.push((element instanceof OnenoteSectionImpl? element:new OnenoteSectionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<OnenoteSectionImpl>("sections", sectionsArrValue);
        }
        if(this.sectionsUrl){
            writer.writeStringValue("sectionsUrl", this.sectionsUrl);
        }
    };
}
