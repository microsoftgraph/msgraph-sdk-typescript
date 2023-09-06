import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type WorkbookPivotTable } from './workbookPivotTable';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface WorkbookPivotTableCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WorkbookPivotTable[] | undefined;
}
