import {Notebook} from './notebook';
import {OnenoteEntityHierarchyModel} from './onenoteEntityHierarchyModel';
import {OnenotePage} from './onenotePage';
import {SectionGroup} from './sectionGroup';
import {SectionLinks} from './sectionLinks';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteSection extends OnenoteEntityHierarchyModel, Parsable {
    /**
     * Indicates whether this is the user's default section. Read-only.
     */
    isDefault?: boolean | undefined;
    /**
     * Links for opening the section. The oneNoteClientURL link opens the section in the OneNote native client if it's installed. The oneNoteWebURL link opens the section in OneNote on the web.
     */
    links?: SectionLinks | undefined;
    /**
     * The collection of pages in the section.  Read-only. Nullable.
     */
    pages?: OnenotePage[] | undefined;
    /**
     * The pages endpoint where you can get details for all the pages in the section. Read-only.
     */
    pagesUrl?: string | undefined;
    /**
     * The notebook that contains the section.  Read-only.
     */
    parentNotebook?: Notebook | undefined;
    /**
     * The section group that contains the section.  Read-only.
     */
    parentSectionGroup?: SectionGroup | undefined;
}
