import { deserializeIntoWorkbookChartGridlinesFormat } from './deserializeIntoWorkbookChartGridlinesFormat';
import { type WorkbookChartGridlinesFormat } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookChartGridlinesFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartGridlinesFormat;
}
