import {Entity} from './entity';
import {WorkbookApplication} from './workbookApplication';
import {WorkbookComment} from './workbookComment';
import {WorkbookFunctions} from './workbookFunctions';
import {WorkbookNamedItem} from './workbookNamedItem';
import {WorkbookOperation} from './workbookOperation';
import {WorkbookTable} from './workbookTable';
import {WorkbookWorksheet} from './workbookWorksheet';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Workbook extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The application property */
    application?: WorkbookApplication | undefined;
    /** The comments property */
    comments?: WorkbookComment[] | undefined;
    /** The functions property */
    functions?: WorkbookFunctions | undefined;
    /** Represents a collection of workbooks scoped named items (named ranges and constants). Read-only. */
    names?: WorkbookNamedItem[] | undefined;
    /** The status of Workbook operations. Getting an operation collection is not supported, but you can get the status of a long-running operation if the Location header is returned in the response. Read-only. Nullable. */
    operations?: WorkbookOperation[] | undefined;
    /** Represents a collection of tables associated with the workbook. Read-only. */
    tables?: WorkbookTable[] | undefined;
    /** Represents a collection of worksheets associated with the workbook. Read-only. */
    worksheets?: WorkbookWorksheet[] | undefined;
}
