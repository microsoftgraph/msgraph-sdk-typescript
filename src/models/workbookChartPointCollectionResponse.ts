import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {WorkbookChartPoint} from './workbookChartPoint';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartPointCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WorkbookChartPoint[] | undefined;
}
