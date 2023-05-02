import {createWorkbookChartPointFromDiscriminatorValue} from './createWorkbookChartPointFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeWorkbookChartPoint} from './serializeWorkbookChartPoint';
import {WorkbookChartPoint} from './workbookChartPoint';
import {WorkbookChartPointCollectionResponse} from './workbookChartPointCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartPointCollectionResponse(workbookChartPointCollectionResponse: WorkbookChartPointCollectionResponse | undefined = {} as WorkbookChartPointCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookChartPointCollectionResponse),
        "value": n => { workbookChartPointCollectionResponse.value = n.getCollectionOfObjectValues<WorkbookChartPoint>(createWorkbookChartPointFromDiscriminatorValue); },
    }
}
