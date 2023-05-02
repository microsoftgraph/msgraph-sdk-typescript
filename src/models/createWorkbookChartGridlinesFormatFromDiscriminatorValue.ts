import {deserializeIntoWorkbookChartGridlinesFormat} from './deserializeIntoWorkbookChartGridlinesFormat';
import {WorkbookChartGridlinesFormat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartGridlinesFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartGridlinesFormat;
}
