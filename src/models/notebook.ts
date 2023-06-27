import {NotebookLinks} from './notebookLinks';
import {OnenoteEntityHierarchyModel} from './onenoteEntityHierarchyModel';
import {OnenoteSection} from './onenoteSection';
import {OnenoteUserRole} from './onenoteUserRole';
import {SectionGroup} from './sectionGroup';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Notebook extends OnenoteEntityHierarchyModel, Parsable {
    /**
     * Indicates whether this is the user's default notebook. Read-only.
     */
    isDefault?: boolean | undefined;
    /**
     * Indicates whether the notebook is shared. If true, the contents of the notebook can be seen by people other than the owner. Read-only.
     */
    isShared?: boolean | undefined;
    /**
     * Links for opening the notebook. The oneNoteClientURL link opens the notebook in the OneNote native client if it's installed. The oneNoteWebURL link opens the notebook in OneNote on the web.
     */
    links?: NotebookLinks | undefined;
    /**
     * The section groups in the notebook. Read-only. Nullable.
     */
    sectionGroups?: SectionGroup[] | undefined;
    /**
     * The URL for the sectionGroups navigation property, which returns all the section groups in the notebook. Read-only.
     */
    sectionGroupsUrl?: string | undefined;
    /**
     * The sections in the notebook. Read-only. Nullable.
     */
    sections?: OnenoteSection[] | undefined;
    /**
     * The URL for the sections navigation property, which returns all the sections in the notebook. Read-only.
     */
    sectionsUrl?: string | undefined;
    /**
     * Possible values are: Owner, Contributor, Reader, None. Owner represents owner-level access to the notebook. Contributor represents read/write access to the notebook. Reader represents read-only access to the notebook. Read-only.
     */
    userRole?: OnenoteUserRole | undefined;
}
