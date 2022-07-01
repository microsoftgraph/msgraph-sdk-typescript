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

export class NotebookImpl extends OnenoteEntityHierarchyModelImpl implements Notebook {
    /** Indicates whether this is the user's default notebook. Read-only. */
    private _isDefault?: boolean | undefined;
    /** Indicates whether the notebook is shared. If true, the contents of the notebook can be seen by people other than the owner. Read-only. */
    private _isShared?: boolean | undefined;
    /** Links for opening the notebook. The oneNoteClientURL link opens the notebook in the OneNote native client if it's installed. The oneNoteWebURL link opens the notebook in OneNote on the web. */
    private _links?: NotebookLinks | undefined;
    /** The section groups in the notebook. Read-only. Nullable. */
    private _sectionGroups?: SectionGroup[] | undefined;
    /** The URL for the sectionGroups navigation property, which returns all the section groups in the notebook. Read-only. */
    private _sectionGroupsUrl?: string | undefined;
    /** The sections in the notebook. Read-only. Nullable. */
    private _sections?: OnenoteSection[] | undefined;
    /** The URL for the sections navigation property, which returns all the sections in the notebook. Read-only. */
    private _sectionsUrl?: string | undefined;
    /** Possible values are: Owner, Contributor, Reader, None. Owner represents owner-level access to the notebook. Contributor represents read/write access to the notebook. Reader represents read-only access to the notebook. Read-only. */
    private _userRole?: OnenoteUserRole | undefined;
    /**
     * Instantiates a new Notebook and sets the default values.
     * @param notebookParameterValue 
     */
    public constructor(notebookParameterValue?: Notebook | undefined) {
        super(notebookParameterValue);
        this._isDefault = notebookParameterValue?.isDefault;
        this._isShared = notebookParameterValue?.isShared;
        this._links = notebookParameterValue?.links;
        this._sectionGroups = notebookParameterValue?.sectionGroups;
        this._sectionGroupsUrl = notebookParameterValue?.sectionGroupsUrl;
        this._sections = notebookParameterValue?.sections;
        this._sectionsUrl = notebookParameterValue?.sectionsUrl;
        this._userRole = notebookParameterValue?.userRole;
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
     * Gets the isDefault property value. Indicates whether this is the user's default notebook. Read-only.
     * @returns a boolean
     */
    public get isDefault() {
        return this._isDefault;
    };
    /**
     * Sets the isDefault property value. Indicates whether this is the user's default notebook. Read-only.
     * @param value Value to set for the isDefault property.
     */
    public set isDefault(value: boolean | undefined) {
        if(value) {
            this._isDefault = value;
        }
    };
    /**
     * Gets the isShared property value. Indicates whether the notebook is shared. If true, the contents of the notebook can be seen by people other than the owner. Read-only.
     * @returns a boolean
     */
    public get isShared() {
        return this._isShared;
    };
    /**
     * Sets the isShared property value. Indicates whether the notebook is shared. If true, the contents of the notebook can be seen by people other than the owner. Read-only.
     * @param value Value to set for the isShared property.
     */
    public set isShared(value: boolean | undefined) {
        if(value) {
            this._isShared = value;
        }
    };
    /**
     * Gets the links property value. Links for opening the notebook. The oneNoteClientURL link opens the notebook in the OneNote native client if it's installed. The oneNoteWebURL link opens the notebook in OneNote on the web.
     * @returns a NotebookLinksInterface
     */
    public get links() {
        return this._links;
    };
    /**
     * Sets the links property value. Links for opening the notebook. The oneNoteClientURL link opens the notebook in the OneNote native client if it's installed. The oneNoteWebURL link opens the notebook in OneNote on the web.
     * @param value Value to set for the links property.
     */
    public set links(value: NotebookLinks | undefined) {
        if(value) {
            this._links = value instanceof NotebookLinksImpl? value as NotebookLinksImpl: new NotebookLinksImpl(value);
        }
    };
    /**
     * Gets the sectionGroups property value. The section groups in the notebook. Read-only. Nullable.
     * @returns a SectionGroupInterface
     */
    public get sectionGroups() {
        return this._sectionGroups;
    };
    /**
     * Sets the sectionGroups property value. The section groups in the notebook. Read-only. Nullable.
     * @param value Value to set for the sectionGroups property.
     */
    public set sectionGroups(value: SectionGroup[] | undefined) {
        if(value) {
            const sectionGroupsArrValue: SectionGroupImpl[] = [];
            this.sectionGroups?.forEach(element => {
                sectionGroupsArrValue.push((element instanceof SectionGroupImpl? element as SectionGroupImpl:new SectionGroupImpl(element)));
            });
            this._sectionGroups = sectionGroupsArrValue;
        }
    };
    /**
     * Gets the sectionGroupsUrl property value. The URL for the sectionGroups navigation property, which returns all the section groups in the notebook. Read-only.
     * @returns a string
     */
    public get sectionGroupsUrl() {
        return this._sectionGroupsUrl;
    };
    /**
     * Sets the sectionGroupsUrl property value. The URL for the sectionGroups navigation property, which returns all the section groups in the notebook. Read-only.
     * @param value Value to set for the sectionGroupsUrl property.
     */
    public set sectionGroupsUrl(value: string | undefined) {
        if(value) {
            this._sectionGroupsUrl = value;
        }
    };
    /**
     * Gets the sections property value. The sections in the notebook. Read-only. Nullable.
     * @returns a OnenoteSectionInterface
     */
    public get sections() {
        return this._sections;
    };
    /**
     * Sets the sections property value. The sections in the notebook. Read-only. Nullable.
     * @param value Value to set for the sections property.
     */
    public set sections(value: OnenoteSection[] | undefined) {
        if(value) {
            const sectionsArrValue: OnenoteSectionImpl[] = [];
            this.sections?.forEach(element => {
                sectionsArrValue.push((element instanceof OnenoteSectionImpl? element as OnenoteSectionImpl:new OnenoteSectionImpl(element)));
            });
            this._sections = sectionsArrValue;
        }
    };
    /**
     * Gets the sectionsUrl property value. The URL for the sections navigation property, which returns all the sections in the notebook. Read-only.
     * @returns a string
     */
    public get sectionsUrl() {
        return this._sectionsUrl;
    };
    /**
     * Sets the sectionsUrl property value. The URL for the sections navigation property, which returns all the sections in the notebook. Read-only.
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
        if(this.isDefault){
            writer.writeBooleanValue("isDefault", this.isDefault);
        }
        if(this.isShared){
            writer.writeBooleanValue("isShared", this.isShared);
        }
        if(this.links){
            writer.writeObjectValue<NotebookLinksImpl>("links", (this.links instanceof NotebookLinksImpl? this.links as NotebookLinksImpl: new NotebookLinksImpl(this.links)));
        }
        if(this.sectionGroups && this.sectionGroups.length != 0){        const sectionGroupsArrValue: SectionGroupImpl[] = [];
        this.sectionGroups?.forEach(element => {
            sectionGroupsArrValue.push((element instanceof SectionGroupImpl? element as SectionGroupImpl:new SectionGroupImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SectionGroupImpl>("sectionGroups", sectionGroupsArrValue);
        }
        if(this.sectionGroupsUrl){
            writer.writeStringValue("sectionGroupsUrl", this.sectionGroupsUrl);
        }
        if(this.sections && this.sections.length != 0){        const sectionsArrValue: OnenoteSectionImpl[] = [];
        this.sections?.forEach(element => {
            sectionsArrValue.push((element instanceof OnenoteSectionImpl? element as OnenoteSectionImpl:new OnenoteSectionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<OnenoteSectionImpl>("sections", sectionsArrValue);
        }
        if(this.sectionsUrl){
            writer.writeStringValue("sectionsUrl", this.sectionsUrl);
        }
        if(this.userRole){
            writer.writeEnumValue<OnenoteUserRole>("userRole", this.userRole);
        }
    };
    /**
     * Gets the userRole property value. Possible values are: Owner, Contributor, Reader, None. Owner represents owner-level access to the notebook. Contributor represents read/write access to the notebook. Reader represents read-only access to the notebook. Read-only.
     * @returns a onenoteUserRole
     */
    public get userRole() {
        return this._userRole;
    };
    /**
     * Sets the userRole property value. Possible values are: Owner, Contributor, Reader, None. Owner represents owner-level access to the notebook. Contributor represents read/write access to the notebook. Reader represents read-only access to the notebook. Read-only.
     * @param value Value to set for the userRole property.
     */
    public set userRole(value: OnenoteUserRole | undefined) {
        if(value) {
            this._userRole = value;
        }
    };
}
