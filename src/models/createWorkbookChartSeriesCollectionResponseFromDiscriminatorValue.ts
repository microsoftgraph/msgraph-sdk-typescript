import {deserializeIntoWorkbookChartSeriesCollectionResponse} from './deserializeIntoWorkbookChartSeriesCollectionResponse';
import {WorkbookChartSeriesCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartSeriesCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartSeriesCollectionResponse;
}
