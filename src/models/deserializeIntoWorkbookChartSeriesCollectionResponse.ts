import {createWorkbookChartSeriesFromDiscriminatorValue} from './createWorkbookChartSeriesFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeWorkbookChartSeries} from './serializeWorkbookChartSeries';
import {WorkbookChartSeries} from './workbookChartSeries';
import {WorkbookChartSeriesCollectionResponse} from './workbookChartSeriesCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartSeriesCollectionResponse(workbookChartSeriesCollectionResponse: WorkbookChartSeriesCollectionResponse | undefined = {} as WorkbookChartSeriesCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookChartSeriesCollectionResponse),
        "value": n => { workbookChartSeriesCollectionResponse.value = n.getCollectionOfObjectValues<WorkbookChartSeries>(createWorkbookChartSeriesFromDiscriminatorValue); },
    }
}
