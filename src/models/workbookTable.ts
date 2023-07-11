import {Entity} from './entity';
import {WorkbookTableColumn} from './workbookTableColumn';
import {WorkbookTableRow} from './workbookTableRow';
import {WorkbookTableSort} from './workbookTableSort';
import {WorkbookWorksheet} from './workbookWorksheet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookTable extends Entity, Parsable {
    /**
     * Represents a collection of all the columns in the table. Read-only.
     */
    columns?: WorkbookTableColumn[] | undefined;
    /**
     * Indicates whether the first column contains special formatting.
     */
    highlightFirstColumn?: boolean | undefined;
    /**
     * Indicates whether the last column contains special formatting.
     */
    highlightLastColumn?: boolean | undefined;
    /**
     * Legacy Id used in older Excle clients. The value of the identifier remains the same even when the table is renamed. This property should be interpreted as an opaque string value and should not be parsed to any other type. Read-only.
     */
    legacyId?: string | undefined;
    /**
     * Name of the table.
     */
    name?: string | undefined;
    /**
     * Represents a collection of all the rows in the table. Read-only.
     */
    rows?: WorkbookTableRow[] | undefined;
    /**
     * Indicates whether the columns show banded formatting in which odd columns are highlighted differently from even ones to make reading the table easier.
     */
    showBandedColumns?: boolean | undefined;
    /**
     * Indicates whether the rows show banded formatting in which odd rows are highlighted differently from even ones to make reading the table easier.
     */
    showBandedRows?: boolean | undefined;
    /**
     * Indicates whether the filter buttons are visible at the top of each column header. Setting this is only allowed if the table contains a header row.
     */
    showFilterButton?: boolean | undefined;
    /**
     * Indicates whether the header row is visible or not. This value can be set to show or remove the header row.
     */
    showHeaders?: boolean | undefined;
    /**
     * Indicates whether the total row is visible or not. This value can be set to show or remove the total row.
     */
    showTotals?: boolean | undefined;
    /**
     * Represents the sorting for the table. Read-only.
     */
    sort?: WorkbookTableSort | undefined;
    /**
     * Constant value that represents the Table style. The possible values are: TableStyleLight1 thru TableStyleLight21, TableStyleMedium1 thru TableStyleMedium28, TableStyleStyleDark1 thru TableStyleStyleDark11. A custom user-defined style present in the workbook can also be specified.
     */
    style?: string | undefined;
    /**
     * The worksheet containing the current table. Read-only.
     */
    worksheet?: WorkbookWorksheet | undefined;
}
