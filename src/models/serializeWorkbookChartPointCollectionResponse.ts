import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeWorkbookChartPoint } from './serializeWorkbookChartPoint';
import { type WorkbookChartPoint } from './workbookChartPoint';
import { type WorkbookChartPointCollectionResponse } from './workbookChartPointCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartPointCollectionResponse(writer: SerializationWriter, workbookChartPointCollectionResponse: WorkbookChartPointCollectionResponse | undefined = {} as WorkbookChartPointCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookChartPointCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkbookChartPoint>("value", workbookChartPointCollectionResponse.value, serializeWorkbookChartPoint);
}
