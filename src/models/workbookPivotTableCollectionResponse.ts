import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {WorkbookPivotTable} from './workbookPivotTable';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookPivotTableCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: WorkbookPivotTable[] | undefined;
}
