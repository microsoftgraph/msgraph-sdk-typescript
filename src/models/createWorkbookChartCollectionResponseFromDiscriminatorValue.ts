import {WorkbookChartCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartCollectionResponse();
}
