import {WorkbookChartSeriesCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartSeriesCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartSeriesCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartSeriesCollectionResponse();
}
