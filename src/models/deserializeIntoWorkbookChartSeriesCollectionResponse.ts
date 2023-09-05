import { createWorkbookChartSeriesFromDiscriminatorValue } from './createWorkbookChartSeriesFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeWorkbookChartSeries } from './serializeWorkbookChartSeries';
import { type WorkbookChartSeries } from './workbookChartSeries';
import { type WorkbookChartSeriesCollectionResponse } from './workbookChartSeriesCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartSeriesCollectionResponse(workbookChartSeriesCollectionResponse: WorkbookChartSeriesCollectionResponse | undefined = {} as WorkbookChartSeriesCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookChartSeriesCollectionResponse),
        "value": n => { workbookChartSeriesCollectionResponse.value = n.getCollectionOfObjectValues<WorkbookChartSeries>(createWorkbookChartSeriesFromDiscriminatorValue); },
    }
}
