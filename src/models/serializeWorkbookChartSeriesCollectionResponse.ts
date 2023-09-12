import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeWorkbookChartSeries } from './serializeWorkbookChartSeries';
import { type WorkbookChartSeries } from './workbookChartSeries';
import { type WorkbookChartSeriesCollectionResponse } from './workbookChartSeriesCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartSeriesCollectionResponse(writer: SerializationWriter, workbookChartSeriesCollectionResponse: WorkbookChartSeriesCollectionResponse | undefined = {} as WorkbookChartSeriesCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookChartSeriesCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkbookChartSeries>("value", workbookChartSeriesCollectionResponse.value, serializeWorkbookChartSeries);
}
