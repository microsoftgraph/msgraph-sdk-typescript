import {deserializeIntoWorkbookChartPointFormat} from './deserializeIntoWorkbookChartPointFormat';
import {WorkbookChartPointFormat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartPointFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartPointFormat;
}
