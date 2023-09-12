import { deserializeIntoWorkbookChartCollectionResponse } from './deserializeIntoWorkbookChartCollectionResponse';
import { type WorkbookChartCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookChartCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartCollectionResponse;
}
