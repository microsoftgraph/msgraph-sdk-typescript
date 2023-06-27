import {Entity} from './entity';
import {Notebook} from './notebook';
import {OnenoteOperation} from './onenoteOperation';
import {OnenotePage} from './onenotePage';
import {OnenoteResource} from './onenoteResource';
import {OnenoteSection} from './onenoteSection';
import {SectionGroup} from './sectionGroup';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Onenote extends Entity, Parsable {
    /**
     * The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.
     */
    notebooks?: Notebook[] | undefined;
    /**
     * The status of OneNote operations. Getting an operations collection is not supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
     */
    operations?: OnenoteOperation[] | undefined;
    /**
     * The pages in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
     */
    pages?: OnenotePage[] | undefined;
    /**
     * The image and other file resources in OneNote pages. Getting a resources collection is not supported, but you can get the binary content of a specific resource. Read-only. Nullable.
     */
    resources?: OnenoteResource[] | undefined;
    /**
     * The section groups in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
     */
    sectionGroups?: SectionGroup[] | undefined;
    /**
     * The sections in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
     */
    sections?: OnenoteSection[] | undefined;
}
