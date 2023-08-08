import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookChart} from './serializeWorkbookChart';
import type {WorkbookChart} from './workbookChart';
import type {WorkbookChartCollectionResponse} from './workbookChartCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartCollectionResponse(writer: SerializationWriter, workbookChartCollectionResponse: WorkbookChartCollectionResponse | undefined = {} as WorkbookChartCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookChartCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkbookChart>("value", workbookChartCollectionResponse.value, serializeWorkbookChart);
}
