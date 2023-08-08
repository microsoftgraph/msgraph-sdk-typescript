import type {Entity} from './entity';
import type {WorkbookChart} from './workbookChart';
import type {WorkbookNamedItem} from './workbookNamedItem';
import type {WorkbookPivotTable} from './workbookPivotTable';
import type {WorkbookTable} from './workbookTable';
import type {WorkbookWorksheetProtection} from './workbookWorksheetProtection';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookWorksheet extends Entity, Parsable {
    /**
     * Returns collection of charts that are part of the worksheet. Read-only.
     */
    charts?: WorkbookChart[] | undefined;
    /**
     * The display name of the worksheet.
     */
    name?: string | undefined;
    /**
     * Returns collection of names that are associated with the worksheet. Read-only.
     */
    names?: WorkbookNamedItem[] | undefined;
    /**
     * Collection of PivotTables that are part of the worksheet.
     */
    pivotTables?: WorkbookPivotTable[] | undefined;
    /**
     * The zero-based position of the worksheet within the workbook.
     */
    position?: number | undefined;
    /**
     * Returns sheet protection object for a worksheet. Read-only.
     */
    protection?: WorkbookWorksheetProtection | undefined;
    /**
     * Collection of tables that are part of the worksheet. Read-only.
     */
    tables?: WorkbookTable[] | undefined;
    /**
     * The Visibility of the worksheet. The possible values are: Visible, Hidden, VeryHidden.
     */
    visibility?: string | undefined;
}
