import {deserializeIntoWorkbookChartLineFormat} from './deserializeIntoWorkbookChartLineFormat';
import {WorkbookChartLineFormat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartLineFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartLineFormat;
}
