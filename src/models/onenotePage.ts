import {Notebook} from './notebook';
import {OnenoteEntitySchemaObjectModel} from './onenoteEntitySchemaObjectModel';
import {OnenoteSection} from './onenoteSection';
import {PageLinks} from './pageLinks';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenotePage extends OnenoteEntitySchemaObjectModel, Parsable {
    /**
     * The page's HTML content.
     */
    content?: string | undefined;
    /**
     * The URL for the page's HTML content.  Read-only.
     */
    contentUrl?: string | undefined;
    /**
     * The unique identifier of the application that created the page. Read-only.
     */
    createdByAppId?: string | undefined;
    /**
     * The date and time when the page was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The indentation level of the page. Read-only.
     */
    level?: number | undefined;
    /**
     * Links for opening the page. The oneNoteClientURL link opens the page in the OneNote native client if it 's installed. The oneNoteWebUrl link opens the page in OneNote on the web. Read-only.
     */
    links?: PageLinks | undefined;
    /**
     * The order of the page within its parent section. Read-only.
     */
    order?: number | undefined;
    /**
     * The notebook that contains the page.  Read-only.
     */
    parentNotebook?: Notebook | undefined;
    /**
     * The section that contains the page. Read-only.
     */
    parentSection?: OnenoteSection | undefined;
    /**
     * The title of the page.
     */
    title?: string | undefined;
    /**
     * The userTags property
     */
    userTags?: string[] | undefined;
}
