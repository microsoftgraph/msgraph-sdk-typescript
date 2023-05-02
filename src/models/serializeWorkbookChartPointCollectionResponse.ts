import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookChartPoint} from './serializeWorkbookChartPoint';
import {WorkbookChartPoint} from './workbookChartPoint';
import {WorkbookChartPointCollectionResponse} from './workbookChartPointCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartPointCollectionResponse(writer: SerializationWriter, workbookChartPointCollectionResponse: WorkbookChartPointCollectionResponse | undefined = {} as WorkbookChartPointCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookChartPointCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkbookChartPoint>("value", workbookChartPointCollectionResponse.value, serializeWorkbookChartPoint);
}
