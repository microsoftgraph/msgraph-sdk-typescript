import {Notebook} from './notebook';
import {OnenoteEntityHierarchyModel} from './onenoteEntityHierarchyModel';
import {OnenoteSection} from './onenoteSection';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SectionGroup extends Partial<AdditionalDataHolder>, OnenoteEntityHierarchyModel, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The notebook that contains the section group. Read-only. */
    parentNotebook?: Notebook | undefined;
    /** The section group that contains the section group. Read-only. */
    parentSectionGroup?: SectionGroup | undefined;
    /** The section groups in the section. Read-only. Nullable. */
    sectionGroups?: SectionGroup[] | undefined;
    /** The URL for the sectionGroups navigation property, which returns all the section groups in the section group. Read-only. */
    sectionGroupsUrl?: string | undefined;
    /** The sections in the section group. Read-only. Nullable. */
    sections?: OnenoteSection[] | undefined;
    /** The URL for the sections navigation property, which returns all the sections in the section group. Read-only. */
    sectionsUrl?: string | undefined;
}
