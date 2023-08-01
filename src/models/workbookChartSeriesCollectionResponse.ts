import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {WorkbookChartSeries} from './workbookChartSeries';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartSeriesCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WorkbookChartSeries[] | undefined;
}
