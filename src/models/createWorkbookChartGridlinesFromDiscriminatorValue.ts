import {deserializeIntoWorkbookChartGridlines} from './deserializeIntoWorkbookChartGridlines';
import {WorkbookChartGridlines} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartGridlinesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartGridlines;
}
