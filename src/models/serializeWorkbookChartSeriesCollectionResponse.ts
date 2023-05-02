import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookChartSeries} from './serializeWorkbookChartSeries';
import {WorkbookChartSeries} from './workbookChartSeries';
import {WorkbookChartSeriesCollectionResponse} from './workbookChartSeriesCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartSeriesCollectionResponse(writer: SerializationWriter, workbookChartSeriesCollectionResponse: WorkbookChartSeriesCollectionResponse | undefined = {} as WorkbookChartSeriesCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookChartSeriesCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkbookChartSeries>("value", workbookChartSeriesCollectionResponse.value, serializeWorkbookChartSeries);
}
