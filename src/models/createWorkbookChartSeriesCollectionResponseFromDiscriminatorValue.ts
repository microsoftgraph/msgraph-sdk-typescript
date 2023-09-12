import { deserializeIntoWorkbookChartSeriesCollectionResponse } from './deserializeIntoWorkbookChartSeriesCollectionResponse';
import { type WorkbookChartSeriesCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookChartSeriesCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartSeriesCollectionResponse;
}
