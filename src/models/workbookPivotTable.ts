import { type Entity } from './entity';
import { type WorkbookWorksheet } from './workbookWorksheet';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface WorkbookPivotTable extends Entity, Parsable {
    /**
     * Name of the PivotTable.
     */
    name?: string | undefined;
    /**
     * The worksheet containing the current PivotTable. Read-only.
     */
    worksheet?: WorkbookWorksheet | undefined;
}
