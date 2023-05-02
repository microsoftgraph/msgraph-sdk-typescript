import {deserializeIntoWorkbookChartPointCollectionResponse} from './deserializeIntoWorkbookChartPointCollectionResponse';
import {WorkbookChartPointCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartPointCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartPointCollectionResponse;
}
