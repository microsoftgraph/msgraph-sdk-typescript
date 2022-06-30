import {createNotebookFromDiscriminatorValue} from './createNotebookFromDiscriminatorValue';
import {createOnenoteOperationFromDiscriminatorValue} from './createOnenoteOperationFromDiscriminatorValue';
import {createOnenotePageFromDiscriminatorValue} from './createOnenotePageFromDiscriminatorValue';
import {createOnenoteResourceFromDiscriminatorValue} from './createOnenoteResourceFromDiscriminatorValue';
import {createOnenoteSectionFromDiscriminatorValue} from './createOnenoteSectionFromDiscriminatorValue';
import {createSectionGroupFromDiscriminatorValue} from './createSectionGroupFromDiscriminatorValue';
import {EntityImpl, NotebookImpl, OnenoteOperationImpl, OnenotePageImpl, OnenoteResourceImpl, OnenoteSectionImpl, SectionGroupImpl} from './index';
import {Notebook} from './notebook';
import {Onenote} from './onenote';
import {OnenoteOperation} from './onenoteOperation';
import {OnenotePage} from './onenotePage';
import {OnenoteResource} from './onenoteResource';
import {OnenoteSection} from './onenoteSection';
import {SectionGroup} from './sectionGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class OnenoteImpl extends EntityImpl implements Onenote {
    /** The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable. */
    private _notebooks?: Notebook[] | undefined;
    /** The status of OneNote operations. Getting an operations collection is not supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable. */
    private _operations?: OnenoteOperation[] | undefined;
    /** The pages in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable. */
    private _pages?: OnenotePage[] | undefined;
    /** The image and other file resources in OneNote pages. Getting a resources collection is not supported, but you can get the binary content of a specific resource. Read-only. Nullable. */
    private _resources?: OnenoteResource[] | undefined;
    /** The section groups in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable. */
    private _sectionGroups?: SectionGroup[] | undefined;
    /** The sections in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable. */
    private _sections?: OnenoteSection[] | undefined;
    /**
     * Instantiates a new onenote and sets the default values.
     * @param onenoteParameterValue 
     */
    public constructor(onenoteParameterValue?: Onenote | undefined) {
        super(onenoteParameterValue);
        this._notebooks = onenoteParameterValue?.notebooks;
        this._operations = onenoteParameterValue?.operations;
        this._pages = onenoteParameterValue?.pages;
        this._resources = onenoteParameterValue?.resources;
        this._sectionGroups = onenoteParameterValue?.sectionGroups;
        this._sections = onenoteParameterValue?.sections;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "notebooks": n => { this.notebooks = n.getCollectionOfObjectValues<NotebookImpl>(createNotebookFromDiscriminatorValue); },
            "operations": n => { this.operations = n.getCollectionOfObjectValues<OnenoteOperationImpl>(createOnenoteOperationFromDiscriminatorValue); },
            "pages": n => { this.pages = n.getCollectionOfObjectValues<OnenotePageImpl>(createOnenotePageFromDiscriminatorValue); },
            "resources": n => { this.resources = n.getCollectionOfObjectValues<OnenoteResourceImpl>(createOnenoteResourceFromDiscriminatorValue); },
            "sectionGroups": n => { this.sectionGroups = n.getCollectionOfObjectValues<SectionGroupImpl>(createSectionGroupFromDiscriminatorValue); },
            "sections": n => { this.sections = n.getCollectionOfObjectValues<OnenoteSectionImpl>(createOnenoteSectionFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the notebooks property value. The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.
     * @returns a NotebookInterface
     */
    public get notebooks() {
        return this._notebooks;
    };
    /**
     * Sets the notebooks property value. The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.
     * @param value Value to set for the notebooks property.
     */
    public set notebooks(value: Notebook[] | undefined) {
        if(value) {
            const notebooksArrValue: NotebookImpl[] = [];
            this.notebooks?.forEach(element => {
                notebooksArrValue.push((element instanceof NotebookImpl? element:new NotebookImpl(element)));
            });
            this._notebooks = notebooksArrValue;
        }
    };
    /**
     * Gets the operations property value. The status of OneNote operations. Getting an operations collection is not supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
     * @returns a OnenoteOperationInterface
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. The status of OneNote operations. Getting an operations collection is not supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
     * @param value Value to set for the operations property.
     */
    public set operations(value: OnenoteOperation[] | undefined) {
        if(value) {
            const operationsArrValue: OnenoteOperationImpl[] = [];
            this.operations?.forEach(element => {
                operationsArrValue.push((element instanceof OnenoteOperationImpl? element:new OnenoteOperationImpl(element)));
            });
            this._operations = operationsArrValue;
        }
    };
    /**
     * Gets the pages property value. The pages in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
     * @returns a OnenotePageInterface
     */
    public get pages() {
        return this._pages;
    };
    /**
     * Sets the pages property value. The pages in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
     * @param value Value to set for the pages property.
     */
    public set pages(value: OnenotePage[] | undefined) {
        if(value) {
            const pagesArrValue: OnenotePageImpl[] = [];
            this.pages?.forEach(element => {
                pagesArrValue.push((element instanceof OnenotePageImpl? element:new OnenotePageImpl(element)));
            });
            this._pages = pagesArrValue;
        }
    };
    /**
     * Gets the resources property value. The image and other file resources in OneNote pages. Getting a resources collection is not supported, but you can get the binary content of a specific resource. Read-only. Nullable.
     * @returns a OnenoteResourceInterface
     */
    public get resources() {
        return this._resources;
    };
    /**
     * Sets the resources property value. The image and other file resources in OneNote pages. Getting a resources collection is not supported, but you can get the binary content of a specific resource. Read-only. Nullable.
     * @param value Value to set for the resources property.
     */
    public set resources(value: OnenoteResource[] | undefined) {
        if(value) {
            const resourcesArrValue: OnenoteResourceImpl[] = [];
            this.resources?.forEach(element => {
                resourcesArrValue.push((element instanceof OnenoteResourceImpl? element:new OnenoteResourceImpl(element)));
            });
            this._resources = resourcesArrValue;
        }
    };
    /**
     * Gets the sectionGroups property value. The section groups in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
     * @returns a SectionGroupInterface
     */
    public get sectionGroups() {
        return this._sectionGroups;
    };
    /**
     * Sets the sectionGroups property value. The section groups in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
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
     * Gets the sections property value. The sections in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
     * @returns a OnenoteSectionInterface
     */
    public get sections() {
        return this._sections;
    };
    /**
     * Sets the sections property value. The sections in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.notebooks && this.notebooks.length != 0){        const notebooksArrValue: NotebookImpl[] = [];
        this.notebooks?.forEach(element => {
            notebooksArrValue.push((element instanceof NotebookImpl? element:new NotebookImpl(element)));
        });
            writer.writeCollectionOfObjectValues<NotebookImpl>("notebooks", notebooksArrValue);
        }
        if(this.operations && this.operations.length != 0){        const operationsArrValue: OnenoteOperationImpl[] = [];
        this.operations?.forEach(element => {
            operationsArrValue.push((element instanceof OnenoteOperationImpl? element:new OnenoteOperationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<OnenoteOperationImpl>("operations", operationsArrValue);
        }
        if(this.pages && this.pages.length != 0){        const pagesArrValue: OnenotePageImpl[] = [];
        this.pages?.forEach(element => {
            pagesArrValue.push((element instanceof OnenotePageImpl? element:new OnenotePageImpl(element)));
        });
            writer.writeCollectionOfObjectValues<OnenotePageImpl>("pages", pagesArrValue);
        }
        if(this.resources && this.resources.length != 0){        const resourcesArrValue: OnenoteResourceImpl[] = [];
        this.resources?.forEach(element => {
            resourcesArrValue.push((element instanceof OnenoteResourceImpl? element:new OnenoteResourceImpl(element)));
        });
            writer.writeCollectionOfObjectValues<OnenoteResourceImpl>("resources", resourcesArrValue);
        }
        if(this.sectionGroups && this.sectionGroups.length != 0){        const sectionGroupsArrValue: SectionGroupImpl[] = [];
        this.sectionGroups?.forEach(element => {
            sectionGroupsArrValue.push((element instanceof SectionGroupImpl? element:new SectionGroupImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SectionGroupImpl>("sectionGroups", sectionGroupsArrValue);
        }
        if(this.sections && this.sections.length != 0){        const sectionsArrValue: OnenoteSectionImpl[] = [];
        this.sections?.forEach(element => {
            sectionsArrValue.push((element instanceof OnenoteSectionImpl? element:new OnenoteSectionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<OnenoteSectionImpl>("sections", sectionsArrValue);
        }
    };
}
