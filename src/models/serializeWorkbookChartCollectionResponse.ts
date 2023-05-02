import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookChart} from './serializeWorkbookChart';
import {WorkbookChart} from './workbookChart';
import {WorkbookChartCollectionResponse} from './workbookChartCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartCollectionResponse(writer: SerializationWriter, workbookChartCollectionResponse: WorkbookChartCollectionResponse | undefined = {} as WorkbookChartCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookChartCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkbookChart>("value", workbookChartCollectionResponse.value, serializeWorkbookChart);
}
