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
export class OnenoteImpl extends EntityImpl implements Onenote, Parsable {
    /** The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable. */
    public notebooks?: Notebook[] | undefined;
    /** The status of OneNote operations. Getting an operations collection is not supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable. */
    public operations?: OnenoteOperation[] | undefined;
    /** The pages in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable. */
    public pages?: OnenotePage[] | undefined;
    /** The image and other file resources in OneNote pages. Getting a resources collection is not supported, but you can get the binary content of a specific resource. Read-only. Nullable. */
    public resources?: OnenoteResource[] | undefined;
    /** The section groups in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable. */
    public sectionGroups?: SectionGroup[] | undefined;
    /** The sections in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable. */
    public sections?: OnenoteSection[] | undefined;
    /**
     * Instantiates a new onenote and sets the default values.
     * @param onenoteParameterValue 
     */
    public constructor(onenoteParameterValue?: Onenote | undefined) {
        super();
        this.notebooks = onenoteParameterValue?.notebooks ;
        this.operations = onenoteParameterValue?.operations ;
        this.pages = onenoteParameterValue?.pages ;
        this.resources = onenoteParameterValue?.resources ;
        this.sectionGroups = onenoteParameterValue?.sectionGroups ;
        this.sections = onenoteParameterValue?.sections ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.notebooks && this.notebooks.length != 0){        const notebooksArrValue: NotebookImpl[] = []; this.notebooks?.forEach(element => {notebooksArrValue.push(new NotebookImpl(element));});
        writer.writeCollectionOfObjectValues<NotebookImpl>("notebooks", notebooksArrValue);
        }
        if(this.operations && this.operations.length != 0){        const operationsArrValue: OnenoteOperationImpl[] = []; this.operations?.forEach(element => {operationsArrValue.push(new OnenoteOperationImpl(element));});
        writer.writeCollectionOfObjectValues<OnenoteOperationImpl>("operations", operationsArrValue);
        }
        if(this.pages && this.pages.length != 0){        const pagesArrValue: OnenotePageImpl[] = []; this.pages?.forEach(element => {pagesArrValue.push(new OnenotePageImpl(element));});
        writer.writeCollectionOfObjectValues<OnenotePageImpl>("pages", pagesArrValue);
        }
        if(this.resources && this.resources.length != 0){        const resourcesArrValue: OnenoteResourceImpl[] = []; this.resources?.forEach(element => {resourcesArrValue.push(new OnenoteResourceImpl(element));});
        writer.writeCollectionOfObjectValues<OnenoteResourceImpl>("resources", resourcesArrValue);
        }
        if(this.sectionGroups && this.sectionGroups.length != 0){        const sectionGroupsArrValue: SectionGroupImpl[] = []; this.sectionGroups?.forEach(element => {sectionGroupsArrValue.push(new SectionGroupImpl(element));});
        writer.writeCollectionOfObjectValues<SectionGroupImpl>("sectionGroups", sectionGroupsArrValue);
        }
        if(this.sections && this.sections.length != 0){        const sectionsArrValue: OnenoteSectionImpl[] = []; this.sections?.forEach(element => {sectionsArrValue.push(new OnenoteSectionImpl(element));});
        writer.writeCollectionOfObjectValues<OnenoteSectionImpl>("sections", sectionsArrValue);
        }
    };
}
