import {Entity} from './entity';
import {WorkbookWorksheet} from './workbookWorksheet';

export interface WorkbookPivotTable extends Entity{
    /** Name of the PivotTable. */
    name?:string | undefined;
    /** The worksheet containing the current PivotTable. Read-only. */
    worksheet?:WorkbookWorksheet | undefined;
}
