import {Entity} from './entity';
import {WorkbookApplication} from './workbookApplication';
import {WorkbookComment} from './workbookComment';
import {WorkbookFunctions} from './workbookFunctions';
import {WorkbookNamedItem} from './workbookNamedItem';
import {WorkbookOperation} from './workbookOperation';
import {WorkbookTable} from './workbookTable';
import {WorkbookWorksheet} from './workbookWorksheet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Workbook extends Entity, Parsable {
    /**
     * The application property
     */
    application?: WorkbookApplication | undefined;
    /**
     * Represents a collection of comments in a workbook.
     */
    comments?: WorkbookComment[] | undefined;
    /**
     * The functions property
     */
    functions?: WorkbookFunctions | undefined;
    /**
     * Represents a collection of workbooks scoped named items (named ranges and constants). Read-only.
     */
    names?: WorkbookNamedItem[] | undefined;
    /**
     * The status of workbook operations. Getting an operation collection is not supported, but you can get the status of a long-running operation if the Location header is returned in the response. Read-only.
     */
    operations?: WorkbookOperation[] | undefined;
    /**
     * Represents a collection of tables associated with the workbook. Read-only.
     */
    tables?: WorkbookTable[] | undefined;
    /**
     * Represents a collection of worksheets associated with the workbook. Read-only.
     */
    worksheets?: WorkbookWorksheet[] | undefined;
}
