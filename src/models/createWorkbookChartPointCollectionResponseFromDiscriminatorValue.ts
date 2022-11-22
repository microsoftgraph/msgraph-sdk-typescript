import {WorkbookChartPointCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartPointCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartPointCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartPointCollectionResponse();
}
