import {createWorkbookChartPointFromDiscriminatorValue} from './createWorkbookChartPointFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeWorkbookChartPoint} from './serializeWorkbookChartPoint';
import type {WorkbookChartPoint} from './workbookChartPoint';
import type {WorkbookChartPointCollectionResponse} from './workbookChartPointCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartPointCollectionResponse(workbookChartPointCollectionResponse: WorkbookChartPointCollectionResponse | undefined = {} as WorkbookChartPointCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookChartPointCollectionResponse),
        "value": n => { workbookChartPointCollectionResponse.value = n.getCollectionOfObjectValues<WorkbookChartPoint>(createWorkbookChartPointFromDiscriminatorValue); },
    }
}
