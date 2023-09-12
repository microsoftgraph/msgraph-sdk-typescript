import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type WorkbookChart } from './workbookChart';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface WorkbookChartCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WorkbookChart[] | undefined;
}
