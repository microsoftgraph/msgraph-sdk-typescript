import type {Notebook} from './notebook';
import type {OnenoteEntityHierarchyModel} from './onenoteEntityHierarchyModel';
import type {OnenoteSection} from './onenoteSection';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface SectionGroup extends OnenoteEntityHierarchyModel, Parsable {
    /**
     * The notebook that contains the section group. Read-only.
     */
    parentNotebook?: Notebook | undefined;
    /**
     * The section group that contains the section group. Read-only.
     */
    parentSectionGroup?: SectionGroup | undefined;
    /**
     * The section groups in the section. Read-only. Nullable.
     */
    sectionGroups?: SectionGroup[] | undefined;
    /**
     * The URL for the sectionGroups navigation property, which returns all the section groups in the section group. Read-only.
     */
    sectionGroupsUrl?: string | undefined;
    /**
     * The sections in the section group. Read-only. Nullable.
     */
    sections?: OnenoteSection[] | undefined;
    /**
     * The URL for the sections navigation property, which returns all the sections in the section group. Read-only.
     */
    sectionsUrl?: string | undefined;
}
